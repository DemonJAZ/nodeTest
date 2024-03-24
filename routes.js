const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('Hello martina Welcome to our Server!'))

module.exports = router
