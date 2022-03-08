const router = require('express').Router()
const Cart = require('../models/Cart.model')

// GET ALL ITEMS
router.get('/getAllItems', (req, res) => {

    Cart
        .find()
        .select('name image price')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// GET ONE ITEM
router.get('/getOneItem/:item_id', (req, res) => {
    const { item_id } = req.params

    Cart
        .findById(item_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// SAVE ITEM
router.post('/saveItem', (req, res) => {
    const { name, description, ingredients, price, weight, category, glutenfree, featured, image } = req.body

    Cart
        .create({ name, description, ingredients, price, weight, category, glutenfree, featured, image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//DELETE ITEM
router.delete('/delete/:_id', (req, res) => {
    const { item_id } = req.params

    Cart
        .findByIdAndDelete(item_id)
        .then(res.json({ message: 'Item eliminado del carrito' }))
        .catch(err => res.status(500).json(err))
})


module.exports = router