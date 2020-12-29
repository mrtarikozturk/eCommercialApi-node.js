const express = require('express');
const router = express.Router();
const CategoryRouter = require('../routers/CategoryRouter');
const ProductRouter = require('../routers/ProductRouter');
const UserRouter = require('../routers/UserRouter');
const AuthRouter = require('../routers/AuthRouter');


router.use('/categories', CategoryRouter);

router.use('/products', ProductRouter);

router.use('/users', UserRouter);

router.use('/auth', AuthRouter);

router.use('/admins', AuthRouter);


module.exports = router;