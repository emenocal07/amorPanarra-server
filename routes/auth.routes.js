const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const {isAuthenticated} = require('../middleware/jwt.middleware')
const saltRounds = 10

//REGISTER (CREATE USER)
router.post('/signup', (req, res) => {

    const { username, userlastname, email, password, phone, name, number, postCode, city, country } = req.body

    const address = {
        street: {
            name,
            number
        },
        postCode: postCode,
        city: city,
        country: country
    }

    if (email === '' || password === '' || username === '' || userlastname === '') {
        res.status(400).json({ message: "Por favor escriba el email, password y nombre de usuario" })
        return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Escriba una dirección de email válida' })
        return
    }
    if (password.length < 4) {
        res.status(400).json({ message: 'La contraseña debe tener al menos 5 caracteres' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: 'El usuario ya existe' })
                return
            }
            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ username, userlastname, email, phone, address, password: hashedPassword })
        })
        .then((createdUser) => {
            const { _id, username, userlastname, email, phone, address } = createdUser

            const user = { _id, username, userlastname, email, phone, address }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        })
})


//LOGIN
router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Por favor escriba email y password" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (!foundUser) {
                res.status(401).json({ message: "Usuario no encontrado" })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, role, username } = foundUser

                const payload = { _id, role, username }

                const authToken = jwt.sign(
                    payload, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '6h' }
                )
                res.status(200).json({ authToken })
            } else {
                res.status(401).json({ message: "No ha sido posible identificar el usuario" })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        })
})


//VERIFY JWT FROM USER TO DB
router.get('/verify', isAuthenticated, (req, res) =>{
    res.status(200).json(req.payload)
})

module.exports = router
