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
    return httpService.get( BASE_URL, user )
}

function save( user ) {
    if ( !user.email || !user.password ) {
        return {
            status: 'error',
            error : 'missing username or password'
        }
    } else {
        return httpService.get( BASE_URL, user )
    }
}


function login( user ) {
    if ( !user.email || !user.password ){
        return {
            status: 'error',
            error : 'missing username or password'
        }
    }else{
        let res = get(user)
        console.log(res)
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