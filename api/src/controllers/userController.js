import { regexEmail, regexPassword } from "../helpers/regex/index.js"
import { addUserDB, loginVerify } from "../querys/userQuerys.js"

export const addUserController = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            res.json({
                msg: "Faltan datos obligatorios",
                success: false,
                ErrorCode: 2
            })
        } else {
            if (regexEmail(email)) {
                if (regexPassword(password)) {

                    addUserDB(email, password, res)
                } else {
                    res.json({
                        msg: "Formato de contraseña invalida",
                        success: false,
                        ErrorCode: 4
                    })
                }
            } else {
                res.json({
                    msg: "Formato de email invalido",
                    success: false,
                    ErrorCode: 3
                })
            }
        }
    } catch (e) {
        console.log(e.message)
        res.json({
            msg: "Entro al catch",
            success: false,
            ErrorCode: 1
        })
    }
}

export const loginUserController = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            res.json({
                msg: "Faltan datos obligatorios",
                success: false,
                ErrorCode: 2
            })
        } else {
            if (regexEmail(email)) {
                if (regexPassword(password)) {

                    loginVerify(email, password, res)
                } else {
                    res.json({
                        msg: "Formato de contraseña invalida",
                        success: false,
                        ErrorCode: 4
                    })
                }
            } else {
                res.json({
                    msg: "Formato de email invalido",
                    success: false,
                    ErrorCode: 3
                })
            }
        }
    } catch (e) {
        console.log(e.message)
        res.json({
            msg: "Entro al catch",
            success: false,
            ErrorCode: 1
        })
    }
}