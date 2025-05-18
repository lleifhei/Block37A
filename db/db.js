const pg = require('pg');
const { Client } = pg;
const client = new Client({
    // Add your database configuration here
    user: '',
    host: 'localhost',
    database: 'your_database',
    password: '',
    port: 5432,
});

module.exports = {
    client,
    query: (text, params) => client.query(text, params),
    getClient: () => client,
    end: () => client.end(),
}
