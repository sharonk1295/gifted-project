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
router.get('/', async (req, res) => {
    try{
        const gifts = await Gift.find({})
        res.status(200).json(gifts)
    }catch(error){
        res.status(400).json(error)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try{
        const deletedGift = await Gift.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedGift)
    }catch(error){
        res.status(400).json(error)
    }
})

//Update
router.put('/:id', async (req, res) => {
    try {
        const updatedGift = await Gift.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    }catch(error) {
        res.status(400).json(error)
    }
})


module.exports = router