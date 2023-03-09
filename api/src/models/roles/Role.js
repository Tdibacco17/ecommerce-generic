import { DataTypes } from 'sequelize';

export const modelRole = (sequelize) => {
    sequelize.define('role', {
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