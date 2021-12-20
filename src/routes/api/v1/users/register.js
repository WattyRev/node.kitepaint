const router = require('express').Router();

router.route('/').get((request, response) => {
    response.json({
        meta: {
            successMessage: 'Registered successfully',
        },
        users: [
            {
                id: null,
                email: null,
                username: null,
            },
        ],
    });
});

module.exports = router;
