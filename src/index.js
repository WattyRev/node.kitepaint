/* eslint-disable zillow/import/no-extraneous-dependencies, no-console */
const express = require('express');
const mysql = require('mysql');

const app = express();

// const sqlConnection = mysql.createConnection({
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
// });
// sqlConnection.connect();

// Set headers for all APIs
app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['*']);
    response.append('Access-Control-Allow-Headers', ['Kp-Auth-Token']);
    next();
});

// Open the server on port 13390
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Define routes
app.get('/', (request, response) => {
    response.status(200).send('');
});

app.get('/api/', (request, response) => {
    response.send('test 1');
});
