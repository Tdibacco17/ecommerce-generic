import { regexOnlyText, regexUUIDV4, regexZipCode, regexOnlyNumber, regexOnlyAlfanumeric } from "../helpers/regex/index.js"
import { addAddressDB } from "../querys/addressQuery.js"

export const registerAddressController = async (req, res) => {
    const { type_of_residence, street, country, city, neighborhood, zip_code, street_number, number_floor, user_id } = req.body

    try {
        if (!type_of_residence || (type_of_residence !== 'delivery' && type_of_residence !== 'billing') || !street || !country || !city || !neighborhood || !zip_code || !street_number || !number_floor || !user_id) {
            res.json({
                msg: "Faltan datos obligatorios",
                success: false,
                ErrorCode: 2
            })
        } else {
            if (regexUUIDV4(user_id)) {
                if (regexOnlyText(type_of_residence) && regexOnlyText(street) && regexOnlyText(country) && regexOnlyText(city) && regexOnlyText(neighborhood)) {
                    if (regexZipCode(zip_code)) {
                        if (regexOnlyNumber(street_number)) {
                            if (regexOnlyAlfanumeric(number_floor)) {
                                addAddressDB(type_of_residence, street, country, city, neighborhood, zip_code, street_number, number_floor, user_id, res)
                            } else {
                                res.json({
                                    msg: "Regex number_floor code no pasa el regex",
                                    success: false,
                                    ErrorCode: 7
                                })
                            }
                        } else {
                            res.json({
                                msg: "Regex street_number code no pasa el regex",
                                success: false,
                                ErrorCode: 6
                            })
                        }
                    } else {
                        res.json({
                            msg: "Regex zip code no pasa el regex",
                            success: false,
                            ErrorCode: 5
                        })
                    }
                } else {
                    res.json({
                        msg: "Regex type_of_residence o street o country o city o neighborhood no pasa el regex",
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