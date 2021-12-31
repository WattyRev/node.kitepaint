const router = require('express').Router();
const manufacturersRouter = require('./manufacturers');
const designsRouter = require('./designs');
const productsRouter = require('./products');

router.route('/').get((request, response) => {
    response.json({
        v1Routes: ['users', 'manufacturers', 'designs', 'products'],
    });
});

router.use('/manufacturers', manufacturersRouter);
router.use('/designs', designsRouter);
router.use('/products', productsRouter);

module.exports = router;
