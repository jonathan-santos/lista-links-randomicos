const express = require('express')
const router = express.Router()

const data = [
    { id: 1, url: 'google.com', descricao: 'teste' },
    { id: 2, url: 'twitter.com', descricao: 'teste' },
    { id: 3, url: 'youtube.com', descricao: 'teste' }
]

router.get('/', (req, res) => {
    res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    const found = data.find((item) => item.id == parseInt(req.params.id))
    if(found)
        res.status(200).json(found)
    else
        res.sendStatus(404)
})

module.exports = router