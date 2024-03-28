const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: '1234.com',
    port: 5432,
});

module.exports = pool;
