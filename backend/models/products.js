module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('GETDATE'),
        allowNull: false
      },

      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('GETDATE'),
        allowNull: false
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true
      },

     title: {
        type: DataTypes.STRING,
        alloweNull: false
     },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      imageName: {
          type: DataTypes.TEXT,
          allowNull: false
      },

      keywords : {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });

    return Product;
}