const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('olá')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} \nPress ctrl + C to stop`)
})