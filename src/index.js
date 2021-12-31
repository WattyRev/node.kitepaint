/* eslint-disable zillow/import/no-extraneous-dependencies, no-console */
const express = require('express');
const router = require('./routes');

const app = express();

// Set headers for all APIs
app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['*']);
    response.append('Access-Control-Allow-Headers', ['Kp-Auth-Token']);
    next();
});

app.use(express.json());

// Open the server
const port = process.env.PORT || 443;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use('/', router);
