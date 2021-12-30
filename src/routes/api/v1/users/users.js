const router = require('express').Router();
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

router.route('/').get((request, response) => {
    response.json({
        meta: {
            sucessMessage: 'Users retrieved successfully',
        },
        users: [{}],
    });
});

module.exports = router;
