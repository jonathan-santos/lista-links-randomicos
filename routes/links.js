const express = require('express')
const Link = require('../models/link')

const router = express.Router()

router.get('/', (req, res) => {
    Link.find((error, links) => {
        if(error)
            res.sendStatus(500, error)

        let link;
        let linkIsDeleted = false

        if(links.length == 0)
            res.status(200).json(null)
        else {
            link = links[Math.floor(Math.random() * links.length)]

            Link.deleteOne({ _id: link._id, }, (error, res) => {
                linkIsDeleted = error == null
                finishGet()
            })
        }

        const finishGet = () => {
            if(linkIsDeleted)
                res.status(200).json({ link })
            else
                res.sendStatus(500, 'There has been an error!')
        }
    })
})

router.post('/', (req, res) => {
    const link = new Link()

    link.url = req.body.url
    link.description = req.body.description
        
    link.save(error => {
        if(error)
            res.send(500, error)
        
        res.status(203)
    })
})

module.exports = router