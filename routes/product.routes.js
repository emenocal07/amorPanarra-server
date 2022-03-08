const router = require('express').Router()
const Product = require('../models/Product.model')

// GET ALL PRODUCTS
router.get('/getAllProducts', (req, res) => {

    Product
        .find()
        .select('name image price glutenfree')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// GET ONE PRODUCT
router.get('/getOneProduct/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// CREATE PRODUCT
router.post('/createProduct', (req, res) => { 
    const { name, description, ingredients, price, weight, category, glutenfree, featured, image } = req.body

    Product
        .create({ name, description, ingredients, price, weight, category, glutenfree, featured, image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EDIT PRODUCT
router.put('/edit/:product_id', (req, res) => {
    const { product_id } = req.params
    const { name, description, ingredients, price, weight, category, glutenfree, featured, image } = req.body

    Product
        .findByIdAndUpdate(product_id, { name, description, ingredients, price, weight, category, glutenfree, featured, image }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//DELETE PRODUCT
router.delete('/delete/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(res.json({ message: 'Producto eliminado' }))
        .catch(err => res.status(500).json(err))
})

module.exports = router
