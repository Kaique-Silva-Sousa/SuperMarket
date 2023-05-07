const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.get('/home',ProductController.home)
router.post('/addProduct',ProductController.addProduct)
router.post('/buy',ProductController.Buy)


module.exports = router