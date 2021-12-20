/* eslint-disable zillow/import/no-extraneous-dependencies, no-console */
const express = require('express');
const AWS = require('aws-sdk');

const app = express();

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
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    dynamoClient.scan({ TableName: 'kitepaint-users-beta' }, (error, data) => {
        if (error) {
            response.status(500).send({
                message: error,
            });
            return;
        }
        const { Items } = data;
        response.send({
            users: Items
        });
    }});
});
