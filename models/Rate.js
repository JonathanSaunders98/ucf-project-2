const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rate extends Model {};

Rate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        mentor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'mentor',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rate'
    }
);

module.exports = Rate;