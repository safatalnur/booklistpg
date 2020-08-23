const { Pool } = require('pg')
const pool = require('../config/database')
// import pool from ('../config/database')

//Creating a table
const sql_create = `CREATE TABLE IF NOT EXISTS Books (
    Book_ID SERIAL PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(100) NOT NULL,
    Comments TEXT
);`

pool.query(sql_create, [], (err, result) => {
    if (err) {
        return console.error(err.message)
    }
    console.log("Successfully creation of the 'Books' table")
})