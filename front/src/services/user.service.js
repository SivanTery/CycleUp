// import { httpService } from './http.service.js'

import {userStorageService} from './user-storage.service.js'

// const BASE_URL = 'user/'
const BASE_URL = 'user'

export const userService = {
    query,
    save,
    get,
    login,
    getEmptyUserData,
}

function query( filterBy = getDefaultFilter() ) {
    return userStorageService.query( BASE_URL, filterBy )
}

function get( filterBy = '') {
    const queryParams = `?name=${filterBy.name}`
    return userStorageService.get( BASE_URL + queryParams )
}

function save( user ) {
    if ( !user.name || !user.password ) {
        return {
            status: 'error',
            error : 'missing username or password'
        }
    } else {
        return userStorageService.post( BASE_URL, user )
    }
}


function login( user ) {
    if ( !user.name || !user.password ){
        return {
            status: 'error',
            error : 'missing username or password'
        }
    }else{
        console.log( get(user.name) );
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