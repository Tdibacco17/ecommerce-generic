import { DataTypes } from 'sequelize';

export const ClientModel = (sequelize) => {
    sequelize.define('Client', {
        Client_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        First_Name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Last_Name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Phone_Number: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        DNI: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        User_ID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'User_ID'
            }
        },
    }, {
        timestamps: false,
    });
};