const express = require('express')
const mongoose = require('mongoose')

const linksRouter = require('./routes/links')

const app = express()
app.use(express.json())

app.use('/api/links', linksRouter)

app.get('/', (req, res) => {
    res.send('olá')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} \nPress ctrl + C to stop`)
})