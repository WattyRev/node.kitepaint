const router = require('express').Router();
const userRouter = require('./user');
const logInRouter = require('./log-in');
const usersRouter = require('./users');
const registerRouter = require('./register');

router.use('/', usersRouter);
router.use('/log-in', logInRouter);
router.use('/register', registerRouter);
router.use('/:userId', userRouter);

module.exports = router;
