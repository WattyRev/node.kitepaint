const router = require('express').Router();
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

router.route('/').get((request, response) => {
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    dynamoClient.scan({ TableName: 'kitepaint-users-beta' }, (error, data) => {
        if (error) {
            response.status(500).send({
                meta: {
                    errorMessage: error,
                },
            });
            return;
        }
        const { Items } = data;
        response.send({
            meta: {
                sucessMessage: 'Users retrieved successfully',
            },
            users: Items,
        });
    });
});

module.exports = router;
