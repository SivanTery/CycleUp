const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

// item

async function query(path, filterBy={ email:''}) {
    try {
        const criteria = {
            email: { $regex: filterBy.email, $options: 'i' }
        }
        console.log(criteria)
        const collection = await dbService.getCollection( path)
        var items = await collection.find( ).toArray()
        // var items = await collection.find( criteria).toArray()
        console.log( items)
        return items
    } catch (err) {
        logger.error('cannot find items', err)
        throw err
    }
}

async function getById(path, itemId) {
    try {
        const collection = await dbService.getCollection( path)
        const item = collection.findOne({ _id: ObjectId(itemId) })
        console.log( items )

        return item
    } catch (err) {
        logger.error(`while finding item ${itemId}`, err)
        throw err
    }
}

async function remove( path, itemId) {
    try {
        const collection = await dbService.getCollection( path)
        await collection.deleteOne({ _id: ObjectId(itemId) })
        return itemId
    } catch (err) {
        logger.error(`cannot remove item ${itemId}`, err)
        throw err
    }
}

async function add(path, item) {
    try {
        const collection = await dbService.getCollection(path)
        await collection.insertOne(item)
        return item
    } catch (err) {
        logger.error('cannot insert item', err)
        throw err
    }
}

async function update(path, item) {
    try {
        const itemToSave = {
            txt: item.txt
        }
        const collection = await dbService.getCollection(path)
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