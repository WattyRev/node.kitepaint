const router = require('express').Router();
const AWS = require('aws-sdk');
const apiRouter = require('./api');
const adminRouter = require('./admin');

AWS.config.update({ region: 'us-west-2' });

router.route('/ping').get((request, response) => {
    response.status(200).send('pong');
});

router.use('/api', apiRouter);

router.use('/admin', adminRouter);

module.exports = router;
