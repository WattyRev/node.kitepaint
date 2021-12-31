const router = require('express').Router();
const { transformManufacturer } = require('../../../../models/Manufacturer');
const scanDynamo = require('../../../../util/scanDynamo');

router.route('/').get(async (request, response) => {
    const { Items } = await scanDynamo({
        TableName: 'kitepaint-beta-manufacturers',
        Limit: 100,
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
            sucessMessage: 'Manufacturers retrieved successfully',
        },
        manufacturers: Items.map(item => {
            const manufacturer = transformManufacturer(item);
            return manufacturer.buildPublicPayload();
        }),
    });
});

module.exports = router;
