import { User } from "../../db.js"
import { encrypt, compare } from "../helpers/hash/index.js"

export const addUserDB = async (email, password, res) => {

    const userEmail = await User.findOne({ where: { Email: email } });

    if (userEmail) {
        res.json({
            msg: "Ya existe un usuario con este email",
            success: false,
            ErrorCode: 5
        })
    } else {
        const passwordHasshed = await encrypt(password)

        const newUser = await User.create({
            Email: email,
            Password: passwordHasshed
        });

        if (newUser) {
            res.json({
                msg: "Usuario creado correctamente",
                success: true,
                result: newUser
            })
        } else {
            res.json({
                msg: "Ocurrio un error al agregar el usuario a la DB",
                success: false,
                ErrorCode: 6
            })
        }
    }
}

export const loginVerify = async (email, password, res) => {

    const userEmail = await User.findOne({ where: { Email: email } });

    if (userEmail) {
        const { dataValues: { Password, ...dataValues } } = userEmail;

        const passwordCheck = await compare(password, Password)

        if (passwordCheck) {
            res.json({
                msg: "Acceso exitoso",
                success: true,
                result: dataValues
            })
        } else {
            res.json({
                msg: "Contraseña incorrecta",
                success: false,
                ErrorCode: 6
            })
        }
    } else {
        res.json({
            msg: "No se encontro un usuario con este email",
            success: false,
            ErrorCode: 5
        })
    }
}

export const newPassword = async (old_password, new_password, user_id, res) => {

    const verify_userID = await User.findOne({ where: { User_ID: user_id } });

    if (verify_userID) {
        const { dataValues: { Password, ...dataValues } } = verify_userID;

        const passwordCheck = await compare(old_password, Password)

        if (passwordCheck) {

            const passwordHasshed = await encrypt(new_password)

            const newPassUser = await User.update({ Password: passwordHasshed }, { where: { User_ID: user_id } });

            if (newPassUser) {
                res.json({
                    msg: "Nueva contraseña creada correctamente",
                    success: true,
                    result: newPassUser
                })
            } else {
                res.json({
                    msg: "Ocurrio un error al agregar la nueva contraseña a la DB",
                    success: false,
                    ErrorCode: 7
                })
            }
        } else {
            res.json({
                msg: "Contraseña incorrecta",
                success: false,
                ErrorCode: 6
            })
        }
    } else {
        res.json({
            msg: "El UserID ingresado no existe en la DB",
            success: false,
            ErrorCode: 5
        })
    }
}