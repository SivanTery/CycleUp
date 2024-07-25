

export const dbService = {
    getAll() {
        fetch( '../../db/users.json' )
            .then( response => {
                if ( !response.ok ) {
                    throw new Error( 'Network response was not ok' );
                }
                return response.json();
            } )
            .then( data => {
                // `data` is the JSON object parsed from the file
                console.log( data );
                // You can now use `data` in your application
            } )
            .catch( error => {
                console.error( 'There was a problem with the fetch operation:', error );
            } );

    },
}