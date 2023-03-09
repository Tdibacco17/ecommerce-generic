import { DataTypes } from 'sequelize';

export const modelPayment = (sequelize) => {
    sequelize.define('payment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
};