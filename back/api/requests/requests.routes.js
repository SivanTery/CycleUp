const express = require('express')
const {getItems, getItemById, addItem, updateItem, removeItem} = require('./requests.controller')
const router = express.Router()


router.get('/users/', getItems)
router.get('/users/:id', getItemById)
router.post('/users/', addItem)
router.put('/users/:id', updateItem)
router.delete('/users/:id', removeItem)

module.exports = router