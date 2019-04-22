const {
    Pool,
    Client,
} = require('pg');

const pool = new Pool({
    host: '138.68.87.73',
    user: 'matijaja',
    password: 'TDd7#r7Z',
    database: 'db_matijaja',
    port: 5432,
});

pool.query('SELECT * FROM Halls', (err, res) => {
    console.log(res.rows);
    pool.end();
  });

const client = new Client({
    host: '138.68.87.73',
    user: 'matijaja',
    password: 'TDd7#r7Z',
    database: 'db_matijaja',
    port: 5432,
});
client.connect();

client.query('SELECT * FROM Users', (err, res) => {
    console.log(res.rows);
    client.end();
});
