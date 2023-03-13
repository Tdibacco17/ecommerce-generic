import { DataTypes } from 'sequelize';

export const modelProduct = (sequelize) => {
    sequelize.define('Product', {
        product_id: {                                   //llave primaria
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        // name: {                                 //nombre producto
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // price: {                                //precio
        //     type: DataTypes.FLOAT,
        //     allowNull: true
        // },
        // image: {                                //imagen
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // description: {                          //descripcion
        //     type: DataTypes.TEXT,
        //     allowNull: true
        // },
        // stock: {                                //stock
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // createdAt: {                            //fecha de creacion
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.DATE,
        //     allowNull: false
        // },
        // updatedAt: {                            //fecha de modificacion
        //     type: DataTypes.DATE,
        //     allowNull: true
        // },
    }, {
        timestamps: true,
    });
};