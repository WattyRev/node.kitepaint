const router = require('express').Router();
const usersRouter = require('./users');

router.route('/').get((request, response) => {
    response.json({
        v1Routes: ['users'],
    });
});

router.use('/users', usersRouter);

module.exports = router;
