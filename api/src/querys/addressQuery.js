import { User, Address } from "../../db.js";

export const addAddressDB = async (type_of_residence, street, country, city, neighborhood, zip_code, street_number, number_floor, user_id, res) => {

    const verify_userID = await User.findOne({ where: { User_ID: user_id } });

    if (verify_userID) {

        const newAddress = await Address.create({
            Type_Of_Residence: type_of_residence,
            Street: street,
            Country: country,
            City: city,
            Neighborhood: neighborhood,
            Zip_Code: zip_code,
            Street_Number: street_number,
            Number_Floor: number_floor,
            User_ID: user_id
        })

        if (newAddress) {
            res.json({
                msg: "Address creado correctamente",
                success: true,
                result: newAddress
            })
        } else {
            res.json({
                msg: "Ocurrio un error al agregar el Address a la DB",
                success: false,
                ErrorCode: 9
            })
        }
    } else {
        res.json({
            msg: "El UserID ingresado no existe en la DB",
            success: false,
            ErrorCode: 8
        })
    }
}