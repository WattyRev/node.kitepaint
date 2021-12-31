const router = require('express').Router();
const AWS = require('aws-sdk');
const apiRouter = require('./api');
const adminRouter = require('./admin');
const checkJwt = require('../util/checkJwt');
const { requiredScopes } = require('express-oauth2-jwt-bearer');

const checkScopes = requiredScopes('admin');

AWS.config.update({ region: 'us-west-2' });

router.route('/ping').get((request, response) => {
    response.status(200).send('pong');
});

router.use('/api', apiRouter);

router.use('/admin', checkJwt, checkScopes, adminRouter);

module.exports = router;
