import { httpService } from './http.service.js'

// import {httpService} from './user-storage.service.js'

// const BASE_URL = 'user/'
const BASE_URL = 'users'

export const userService = {
    query,
    save,
    get,
    login,
    getEmptyUserData,
}

function query( filterBy = getDefaultFilter() ) {
    return httpService.get( BASE_URL, filterBy )
}

function get( user = {}) {
    console.log(user)
    return httpService.get( BASE_URL, user )
}

function save( user ) {
    if ( !user.name || !user.password ) {
        return {
            status: 'error',
            error : 'missing username or password'
        }
    } else {
        return httpService.post( BASE_URL, user )
    }
}


function login( user ) {
    if ( !user.name || !user.password ){
        return {
            status: 'error',
            error : 'missing username or password'
        }
    }else{
        console.log( get(user) );
        return {
            status: 'success'
        }
    }
}

function getEmptyUserData() {
    return {
        name : "",
    }
}

function getDefaultFilter() {
    return {
        name : "",
        password : "",
        mail : "",
        phone : "",
        city : "",
    }
}