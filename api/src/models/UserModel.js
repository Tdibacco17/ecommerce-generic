import { DataTypes } from 'sequelize';

export const UserModel = (sequelize) => {
    sequelize.define('User', {
        User_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Email_Verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
            allowNull: false,
        },
        Account_State: {
            type: DataTypes.ENUM('active', 'banned'),
            defaultValue: 'active',
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};