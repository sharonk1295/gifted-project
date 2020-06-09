const express = require('express')
const router = express.Router
const Gift = require('../models/gifts')

//Create
router.post('/', async (req, res) => {
    try{
        const createdGift = await Gift.create(req.body)
        res.status(200).json(createdGift)
    }
    catch(error){
        res.status(400).json(error)
    }
})

//Get
router.get('/')


module.exports = router