const router = require('express').Router({ mergeParams: true });
const queryDynamo = require('../../../../util/queryDynamo');
const Manufacturer = require('../../../../models/Manufacturer');

router.route('/').get(async (request, response) => {
    const { Items } = await queryDynamo({
        TableName: 'kitepaint-beta-manufacturers',
        KeyConditionExpression: `id = ${request.params.manufacturerId}`,
    }).catch(error => {
        response.status(500).json({
            meta: {
                errorMessage: error,
            },
        });
        return Promise.reject(error);
    });

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
});

module.exports = router;
