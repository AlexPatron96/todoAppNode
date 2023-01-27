//* instancia para la conexion de la db
const db = require("../utils/database");


const { DataTypes } = require("sequelize");
const Tasks = require("./tasks.model");
const Categories = require("./categories.model");


const TasksCategories = db.define("tasks_categories", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tasksId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "task_id",
        references: {
            model: Tasks,
            key: "id",
        },
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        references: {
            model: Categories,
            key: "id",
        },
    },
});

module.exports = TasksCategories;
