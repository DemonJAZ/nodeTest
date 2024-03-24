const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000
app.use('/get', router)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
