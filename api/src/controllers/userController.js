import { regexEmail, regexPassword, regexUUIDV4 } from "../helpers/regex/index.js"
import { addUserDB, loginVerify, newPassword } from "../querys/userQuerys.js"

export const registerUserController = async (req, res) => {
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

export const updatePasswordUserController = async (req, res) => {
    const { old_password, new_password, user_id } = req.body

    try {
        if (!old_password || !new_password || !user_id) {
            res.json({
                msg: "Faltan datos obligatorios",
                success: false,
                ErrorCode: 2
            })
        } else {
            if (regexUUIDV4(user_id)) {
                if (regexPassword(new_password)) {
                    newPassword(old_password, new_password, user_id, res)
                } else {
                    res.json({
                        msg: "Regex password no paso el regex",
                        success: false,
                        ErrorCode: 4
                    })
                }
            } else {
                res.json({
                    msg: "RegexUUIDV4 no pasa el regex",
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