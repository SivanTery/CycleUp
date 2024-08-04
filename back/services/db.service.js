const { MongoClient } = require( 'mongodb' );
const config = require( '../config' );
const logger = require( './logger.service' );

module.exports = {
    getCollection,
    connect
};

let dbConn = null;

async function getCollection( collectionName ) {
    try {
        const db = await connect();
        const collection = db.collection( collectionName );
        return collection;
    } catch ( err ) {
        logger.error( 'Failed to get Mongo collection', err );
        throw err;
    }
}

async function connect() {
    if ( dbConn ) return dbConn;
    try {
        logger.info( 'Connecting to MongoDB...' );
        const client = await MongoClient.connect( config.dbURL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            // Uncomment and adjust if TLS/SSL is required
            // tls: true,
            // tlsAllowInvalidCertificates: true, // For development only
            // tlsCAFile: '/path/to/ca.pem', // Path to CA file
        } );
        logger.info( 'MongoDB client connected' );

        const db = client.db( config.dbName );
        dbConn = db;
        logger.info( 'MongoDB database connection established' );
        return db;
    } catch ( err ) {
        logger.error( 'Cannot Connect to DB', err );
        throw err;
    }
}