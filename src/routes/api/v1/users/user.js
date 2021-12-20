const router = require('express').Router({ mergeParams: true });

router.route('/').get((request, response) => {
    response.json({
        meta: {
            successMessage: `User with id "${request.params.userId}" retrieved successfully`,
        },
        params: request.params.userId,
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
