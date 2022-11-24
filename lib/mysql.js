const mysql = require('mysql2/promise');
const {config} = require('../config');

const connect = mysql.createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    port: config.dbPort,
    database: config.dbName
});

async function getAll() {
    try {
        const[movies] = await connect.query(`SELECT * FROM movie`);
        return movies;
    } catch (error) {
        return error;
    }
}

module.exports = {getAll};