const logger = require( '../../services/logger.service' )
const requestsService = require( './requests.service' )


async function getItems( req, res ) {
    try {
        logger.debug( 'Getting Items' )
        const filterBy = {
            email : req.query.email || ''
        }

        const resourceType = normalizePath( req.route.path );

        const items = await requestsService.query( resourceType, filterBy )
        res.json( items )
        // console.log(items)
    } catch ( err ) {
        logger.error( 'Failed to get items', err )
        res.status( 500 ).send( { err : 'Failed to get items' } )
    }
}

async function addItem( req, res ) {
    try {
        const item = req.body
        const resourceType = normalizePath( req.route.path );
        const addedItem = await requestsService.add( resourceType, item )
        res.json( addedItem )
    } catch ( err ) {
        logger.error( 'Failed to add item', err )
        res.status( 500 ).send( { err : 'Failed to add item' } )
    }
}

async function getItemById( req, res ) {
    try {
        const itemId = req.params.id
        const resourceType = normalizePath( req.route.path );
        const item = await requestsService.getById( resourceType, itemId )
        res.json( item )
    } catch ( err ) {
        logger.error( 'Failed to get item', err )
        res.status( 500 ).send( { err : 'Failed to get item' } )
    }
}

async function updateItem( req, res ) {
    try {
        const item = req.body
        const resourceType = normalizePath( req.route.path );
        const updatedItem = await requestsService.update( resourceType, item )
        res.json( updatedItem )
    } catch ( err ) {
        logger.error( 'Failed to update item', err )
        res.status( 500 ).send( { err : 'Failed to update item' } )

    }
}

async function removeItem( req, res ) {
    try {
        const itemId = req.params.id
        const resourceType = normalizePath( req.route.path );
        const removedId = await requestsService.remove( resourceType, itemId )
        res.send( removedId )
    } catch ( err ) {
        logger.error( 'Failed to remove item', err )
        res.status( 500 ).send( { err : 'Failed to remove item' } )
    }
}

function normalizePath( string ) {
    return string.replace( /\/+$/, '' ).replace( /^\/+/, '' );

}

module.exports = {
    getItems,
    getItemById,
    addItem,
    updateItem,
    removeItem
}