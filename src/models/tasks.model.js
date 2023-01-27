//* instancia para la conexion de la db
const db = require("../utils/database");


const { DataTypes } = require("sequelize");

const Users = require("./users.model");



const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: "is_complete",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id",
        },
    },
});

module.exports = Tasks;
