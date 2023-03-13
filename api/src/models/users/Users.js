import { DataTypes } from 'sequelize';

export const modelUsers = (sequelize) => {
    sequelize.define('Users', {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
            allowNull: false,
        },
        account_state: {
            type: DataTypes.ENUM('active', 'banned'),
            defaultValue: 'active',
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};