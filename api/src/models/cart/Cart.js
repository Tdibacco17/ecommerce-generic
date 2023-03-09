import { DataTypes } from 'sequelize';

export const modelCart = (sequelize) => {
    sequelize.define('cart', {
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