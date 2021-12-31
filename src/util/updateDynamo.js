const AWS = require('aws-sdk');

function updateDynamo(params) {
    return new Promise((resolve, reject) => {
        // Set up dynamo client
        const dynamoClient = new AWS.DynamoDB.DocumentClient();

        dynamoClient.update(params, (error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    });
}

module.exports = updateDynamo;
