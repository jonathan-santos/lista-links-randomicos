const express = require('express')
const mongoose = require('mongoose')

const linksRouter = require('./routes/links')

mongoose.connect('mongodb://admin:j123456@ds261616.mlab.com:61616/lista-links-randomicos', { useNewUrlParser: true });

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/api/links', linksRouter)

app.get('/', (req, res) => {
    res.send('olá')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} \nPress ctrl + C to stop`)
})