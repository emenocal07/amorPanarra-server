const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use('/products', require('./product.routes'))
router.use('/users', require('./user.routes'))
router.use('/cart', require('./cart.routes'))
router.use('/upload', require('./upload.routes'))

module.exports = router;
