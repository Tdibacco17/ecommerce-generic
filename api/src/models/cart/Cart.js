import { DataTypes } from 'sequelize';

export const modelCart = (sequelize) => {
    sequelize.define('Cart', {
        cart_id: {                                       //llave primaria
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        // total: {                                    //total a pagar
        //     type: DataTypes.FLOAT,
        //     allowNull: false
        // }
    }, {
        timestamps: true,
    });
};