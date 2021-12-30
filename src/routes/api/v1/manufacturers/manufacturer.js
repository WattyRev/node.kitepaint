const router = require('express').Router({ mergeParams: true });
const AWS = require('aws-sdk');
const Manufacturer = require('../../../../models/Manufacturer');

router.route('/').get((request, response) => {
    // Set up dynamo client
    const dynamoClient = new AWS.DynamoDB.DocumentClient();

    // Fetch manufacturer by ID
    dynamoClient.query(
        {
            TableName: 'kitepaint-beta-manufacturers',
            KeyConditionExpression: `id = ${request.params.manufacturerId}`,
        },
        (error, data) => {
            // Handle failure
            if (error) {
                response.status(500).json({
                    meta: {
                        errorMessage: error,
                    },
                });
                return;
            }

            // Handle success
            const { Items } = data;
            response.json({
                meta: {
                    sucessMessage: `Manufacturer with id "${request.params.manufacturerId}" retrieved successfully`,
                },
                manufacturers: Items.map(item => {
                    const manufacturer = new Manufacturer({
                        id: item.id,
                        name: item.name,
                        websiteUrl: item.websiteUrl,
                        logoUrl: item.logoUrl,
                    });
                    return manufacturer.buildPayload();
                }),
            });
        }
    );
});

module.exports = router;
