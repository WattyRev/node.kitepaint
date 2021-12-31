const AWS = require('aws-sdk');

function putDybamo(params) {
    return new Promise((resolve, reject) => {
        // Set up dynamo client
        const dynamoClient = new AWS.DynamoDB.DocumentClient();

        dynamoClient.put(params, (error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    });
}

module.exports = putDybamo;
