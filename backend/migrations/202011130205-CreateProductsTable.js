module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
          },
    
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('GETDATE'),
            allowNull: false
        },

        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('GETDATE'),
            allowNull: false
        },

        name: {
            type: Sequelize.STRING,
            allowNull: true
          },
    
         title: {
            type: Sequelize.STRING,
            alloweNull: false
         },
    
          price: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
    
          description: {
            type: Sequelize.TEXT,
            allowNull: true
          },
    
          imageName: {
              type: Sequelize.TEXT,
              allowNull: false
          },
    
          keywords : {
            type: Sequelize.TEXT,
            allowNull: true
          }
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
    }
  };