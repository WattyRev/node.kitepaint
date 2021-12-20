const router = require('express').Router();
const apiRouter = require('./api');

router.route('/ping').get((request, response) => {
    response.status(200).send('pong');
});

router.use('/api', apiRouter);

module.exports = router;
