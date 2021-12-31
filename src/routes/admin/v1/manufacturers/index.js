const router = require('express').Router();
const manufacturerRouter = require('./manufacturer');
const manufacturersRouter = require('./manufacturers');

router.use('/', manufacturersRouter);
router.use('/:manufacturerId', manufacturerRouter);

module.exports = router;
