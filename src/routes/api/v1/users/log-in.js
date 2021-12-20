const router = require('express').Router();

router.route('/').get((request, response) => {
    response.json({
        meta: {
            successMessage: 'Logged in successfully',
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
