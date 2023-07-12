const Pool = require('pg').Pool
require('dotenv').config()

console.log(process.env.USERN)

const pool = new Pool({
    user: process.env.USERN,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool