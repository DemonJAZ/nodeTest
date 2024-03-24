const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('Hello martina Welcome to our test Server!'))

module.exports = router
