import { Sequelize } from "sequelize";

const db = new Sequelize('login_auth', 'lucid', '', {
    host: "localhost",
    dialect: "postgres",
    port: 5432

})


export default db;