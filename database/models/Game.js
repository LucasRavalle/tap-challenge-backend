module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
    'Game',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        cells: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'game',
        timestamps: false,
        created_at: 'created_at'
    });

    Game.associate = models => {
        Game.belongsTo(models.State, {
            as: 'stateGame',
            foreignKey: 'state_id'
        })
    }

return Game;
}