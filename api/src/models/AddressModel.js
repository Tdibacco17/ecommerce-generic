import { DataTypes } from 'sequelize';

export const AddressModel = (sequelize) => {
    sequelize.define('Address', {
        Address_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        Type_Of_Residence: {
            type: DataTypes.ENUM('delivery', 'billing'),
            allowNull: false,
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Zip_Code: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Street_Number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Number_Floor: {
            type: DataTypes.STRING,
            allowNull: false,
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