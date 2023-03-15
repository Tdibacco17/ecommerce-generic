import { regexUUIDV4, regexOnlyText, regexPhoneNumber, regexDNI } from "../helpers/regex/index.js"
import { addClientDB } from "../querys/clientQuery.js"

export const registerClientController = async (req, res) => {
    const { first_name, last_name, phone_number, dni, user_id } = req.body

    try {
        if (!first_name || !last_name || !phone_number || !dni || !user_id) {
            res.json({
                msg: "Faltan datos obligatorios",
                success: false,
                ErrorCode: 2
            })
        } else {
            if (regexUUIDV4(user_id)) {
                if (regexOnlyText(first_name) && regexOnlyText(last_name)) {
                    if (regexPhoneNumber(phone_number)) {
                        if (regexDNI(dni)) {

                            addClientDB(first_name, last_name, phone_number, dni, user_id, res)
                        } else {
                            res.json({
                                msg: "Regex dni no pasa el regex",
                                success: false,
                                ErrorCode: 6
                            })
                        }
                    } else {
                        res.json({
                            msg: "Regex phone_number no pasa el regex",
                            success: false,
                            ErrorCode: 5
                        })
                    }
                } else {
                    res.json({
                        msg: "Regex first_name o last_name no pasa el regex",
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