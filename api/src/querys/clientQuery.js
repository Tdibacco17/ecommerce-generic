import { User, Client } from "../../db.js"

export const addClientDB = async (first_name, last_name, phone_number, dni, user_id, res) => {

    const verify_userID = await User.findOne({ where: { User_ID: user_id } });

    if (verify_userID) {

        const clientDNI = await Client.findOne({ where: { DNI: dni } });

        if (clientDNI) {
            res.json({
                msg: "Ya existe un cliente con este DNI",
                success: false,
                ErrorCode: 9
            })
        } else {
            const newClient = await Client.create({
                First_Name: first_name,
                Last_Name: last_name,
                Phone_Number: phone_number,
                DNI: dni,
                User_ID: user_id,
            })

            if (newClient) {
                res.json({
                    msg: "Cliente creado correctamente",
                    success: true,
                    result: newClient
                })
            } else {
                res.json({
                    msg: "Ocurrio un error al agregar el cliente a la DB",
                    success: false,
                    ErrorCode: 10
                })
            }
        }
    } else {
        res.json({
            msg: "El UserID ingresado no existe en la DB",
            success: false,
            ErrorCode: 8
        })
    }
}