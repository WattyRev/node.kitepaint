const AWS = require('aws-sdk');

function scanDynamo(params) {
    return new Promise((resolve, reject) => {
        const dynamoClient = new AWS.DynamoDB.DocumentClient();
        dynamoClient.scan(params, (error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    });
}

module.exports = scanDynamo;
