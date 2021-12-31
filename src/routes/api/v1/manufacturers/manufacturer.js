const router = require('express').Router({ mergeParams: true });
const queryDynamo = require('../../../../util/queryDynamo');
const { transformManufacturer } = require('../../../../models/Manufacturer');

router.route('/').get(async (request, response) => {
    // Fetch manufacturer by ID
    const { Items } = await queryDynamo({
        TableName: 'kitepaint-beta-manufacturers',
        KeyConditionExpression: `id = ${request.params.manufacturerId}`,
    }).catch(error => {
        response.status(500).json({
            meta: {
                errorMessage: error,
            },
        });
        return Promise.reject();
    });
    response.json({
        meta: {
            sucessMessage: `Manufacturer with id "${request.params.manufacturerId}" retrieved successfully`,
        },
        manufacturers: Items.map(item => {
            const manufacturer = transformManufacturer(item);
            return manufacturer.buildPublicPayload();
        }),
    });
});

module.exports = router;