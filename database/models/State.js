module.exports = (sequelize, DataTypes) => {
    const State = sequelize.define(
    'State',
    {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'state',
        timestamps: false
    });

    State.associate = models => {
        State.hasMany(models.Game, {
            as: 'stateGame',
            foreignKey: 'state_id'
        })
    }

return State;
}