const express = require('express')
const {getItems, getItemById, addItem, updateItem, removeItem} = require('./requests.controller')
const router = express.Router()


router.get('/', getItems)
router.get('/:id', getItemById)
router.post('/', addItem)
router.put('/:id', updateItem)
router.delete('/:id', removeItem)

module.exports = router