const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");

const users = [
    { username: "Alex", email: "alex@gmail.com", password: "1234567" },
    { username: "Bello", email: "bello@gmail.com", password: "123456" },
    { username: "Andres", email: "andres@gmail.com", password: "1234567" },
];

const tasks = [
    { title: "tarea1", description: "lalalalal", userId: 1 },
    { title: "tarea2", description: "lalalalal", userId: 1 },
    { title: "tarea3", description: "lalalalal", userId: 2 },
    { title: "tarea4", description: "lalalalal", userId: 3 },
];

// const categories = [];

// const tasksCategories = [];

// cada modelo puede acceder a los metodos
//create
//findOne, findAll, findByPk
//update
//destroy

//Con esto generamos datos de las tablas
db.sync({ force: true }) 
    .then(() => {
        console.log("Iniciando con el sembrío");
        users.forEach((user) => {
            // creando datos para tabla users
            Users.create(user);

            //creando datos para tabla tasks
            setTimeout(() => {
                tasks.forEach((task) => {
                    Tasks.create(task);
                });
            }, 100);
        });
    })
    .catch((error) => console.log(error));
