const { Pool } = require('pg')

//Connection to the database

const pool = new Pool({
    user: "postgres",
    password: null,
    host: "localhost",
    database: "booklistmvc",
    port: 5432,
})

console.log("Successfully connected to the database")

module.exports = pool