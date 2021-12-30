const router = require('express').Router();
const AWS = require('aws-sdk');
const Manufacturer = require('../../../../models/Manufacturer');

AWS.config.update({ region: 'us-west-2' });

router.route('/').get((request, response) => {
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    dynamoClient.scan({ TableName: 'kitepaint-beta-manufacturers', Limit: 100 }, (error, data) => {
        if (error) {
            response.status(500).json({
                meta: {
                    errorMessage: error,
                },
            });
            return;
        }
        const { Items } = data;
        response.json({
            meta: {
                sucessMessage: 'Manufacturers retrieved successfully',
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
    });
});

module.exports = router;
