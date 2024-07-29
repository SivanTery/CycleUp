const logger = require( '../../services/logger.service' )
const requestsService = require( './requests.service' )


async function getItems( req, res ) {
    try {
        logger.debug( 'Getting Items' )
        const filterBy = {
            txt : req.query.txt || ''
        }
        const items = await requestsService.query( filterBy )
        res.json( items )
    } catch ( err ) {
        logger.error( 'Failed to get items', err )
        res.status( 500 ).send( { err : 'Failed to get items' } )
    }
}

async function addItem( req, res ) {
    try {
        const item = req.body
        const addedItem = await requestsService.add( item )
        res.json( addedItem )
    } catch ( err ) {
        logger.error( 'Failed to add item', err )
        res.status( 500 ).send( { err : 'Failed to add item' } )
    }
}

async function getItemById( req, res ) {
    try {
        const itemId = req.params.id
        const item = await requestsService.getById( itemId )
        res.json( item )
    } catch ( err ) {
        logger.error( 'Failed to get item', err )
        res.status( 500 ).send( { err : 'Failed to get item' } )
    }
}

async function updateItem( req, res ) {
    try {
        const item = req.body
        const updatedItem = await requestsService.update( item )
        res.json( updatedItem )
    } catch ( err ) {
        logger.error( 'Failed to update item', err )
        res.status( 500 ).send( { err : 'Failed to update item' } )

    }
}

async function removeItem( req, res ) {
    try {
        const itemId = req.params.id
        const removedId = await requestsService.remove( itemId )
        res.send( removedId )
    } catch ( err ) {
        logger.error( 'Failed to remove item', err )
        res.status( 500 ).send( { err : 'Failed to remove item' } )
    }
}

module.exports = {
    getItems,
    getItemById,
    addItem,
    updateItem,
    removeItem
}