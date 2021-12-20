const router = require('express').Router();
const v1Router = require('./v1');

router.route('/').get((request, response) => {
    response.json({
        apis: ['/v1'],
    });
});

router.use('/v1', v1Router);

module.exports = router;
