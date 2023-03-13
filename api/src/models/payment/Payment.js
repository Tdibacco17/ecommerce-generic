import { DataTypes } from 'sequelize';

export const modelPayment = (sequelize) => {
    sequelize.define('Payment', {
        payment_id: {                               //llave primaria
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        // amount: {                                   //precio total
        //     type: DataTypes.FLOAT,
        //     allowNull: false
        // },
        // status: {                                   //estado de pago
        //     type: DataTypes.ENUM('pending', 'paid', 'cancelled'),
        //     allowNull: false
        // },
        // paymentDate: {                              //fecha de pago
        //     type: DataTypes.DATE,
        //     allowNull: true
        // },
        // paymentMethod: {                            //metodo de pago
        //     type: DataTypes.ENUM('credit card', 'debit card', 'paypal', 'bitcoin'),
        //     allowNull: true
        // },
        // customerId: {                               //id de usuario
        //     type: DataTypes.UUID,
        //     allowNull: false
        // },
        // createdAt: {                                //fecha de creacion
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.DATE,
        //     allowNull: false
        // },
    }, {
        timestamps: false,
    });
};