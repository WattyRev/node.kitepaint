const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { transformManufacturer } = require('../../../../models/Manufacturer');
const scanDynamo = require('../../../../util/scanDynamo');
const putDynamo = require('../../../../util/putDynamo');

router
    .route('/')
    /**
     * Get manufacturers for admin UI
     *
     * @returns
     * 200 - Success
     * {
     *     meta: {
     *          successMessage: String
     *     },
     *     manufacturers: [
     *          Manufacturer, ...
     *     ]
     * }
     *
     * 500 - Server error
     * {
     *      meta: {
     *          errorMessage: *
     *      },
     *      manufacturers: []
     * }
     */
    .get(async (request, response) => {
        const { Items } = await scanDynamo({
            TableName: 'kitepaint-beta-manufacturers',
            Limit: 100,
        }).catch(error => {
            response.status(500).json({
                meta: {
                    errorMessage: error,
                },
                manufacturers: [],
            });
            return Promise.reject(error);
        });

        response.status(200).json({
            meta: {
                sucessMessage: 'Manufacturers retrieved successfully',
            },
            manufacturers: Items.map(item => {
                const manufacturer = transformManufacturer(item);
                return manufacturer.builadAdminPayload();
            }),
        });
    })

    /**
     * Create new manufacturer
     *
     * @param body
     * {
     *      manufacturer: Manufacturer // id, createdDateTime, modifiedDateTime are ignored
     * }
     * @returns
     * 201 - Success
     * {
     *     meta: {
     *          successMessage: String
     *     },
     *     manufacturers: [
     *          Manufacturer
     *     ]
     * }
     *
     * 500 - Server error
     * {
     *      meta: {
     *          errorMessage: *
     *      },
     *      manufacturers: []
     * }
     */
    .post(async (request, response) => {
        const manufacturer = transformManufacturer(request.body.manufacturer);
        const data = await putDynamo({
            TableName: 'kitepaint-beta-manufacturers',
            Item: {
                ...manufacturer.buildAdminPayload(),
                id: uuid(),
                createdDateTime: new Date().toISOString(),
                updatedDateTime: new Date().toISOString(),
            },
        }).catch(error => {
            response.status(500).json({
                meta: {
                    errorMessage: error,
                },
            });
            return Promise.reject(error);
        });
        response.status(201).json(data);
    });

module.exports = router;
