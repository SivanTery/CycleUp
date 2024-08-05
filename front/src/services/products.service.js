import { httpService } from './http.service.js'

// import {httpService} from './user-storage.service.js'

// const BASE_URL = 'user/'
const BASE_URL = 'products'

export const productsService = {
    query,
}

function query(  ) {
    return httpService.get( BASE_URL )
}