const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

// item

async function query(filterBy={txt:''}) {
    try {
        const criteria = {
            txt: { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('item')
        var items = await collection.find(criteria).toArray()
        return items
    } catch (err) {
        logger.error('cannot find items', err)
        throw err
    }
}

async function getById(itemId) {
    try {
        const collection = await dbService.getCollection('item')
        const item = collection.findOne({ _id: ObjectId(itemId) })
        return item
    } catch (err) {
        logger.error(`while finding item ${itemId}`, err)
        throw err
    }
}

async function remove(itemId) {
    try {
        const collection = await dbService.getCollection('item')
        await collection.deleteOne({ _id: ObjectId(itemId) })
        return itemId
    } catch (err) {
        logger.error(`cannot remove item ${itemId}`, err)
        throw err
    }
}

async function add(item) {
    try {
        const collection = await dbService.getCollection('item')
        await collection.insertOne(item)
        return item
    } catch (err) {
        logger.error('cannot insert item', err)
        throw err
    }
}

async function update(item) {
    try {
        const itemToSave = {
            txt: item.txt
        }
        const collection = await dbService.getCollection('item')
        await collection.updateOne({ _id: ObjectId(item._id) }, { $set: itemToSave })
        return item
    } catch (err) {
        logger.error(`cannot update item ${item._id}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}