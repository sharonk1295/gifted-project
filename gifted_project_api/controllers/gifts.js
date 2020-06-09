const express = require('express')
const router = express.Router
const Gift = require('')

//Create
router.post('/', async (req, res) => {
    const createdGift = await Gift.create(req.body)
})