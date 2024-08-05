import { httpService } from './http.service.js'

// import {httpService} from './user-storage.service.js'

// const BASE_URL = 'user/'
const BASE_URL = 'benefits'

export const benefitsService = {
    query,
}

function query(  ) {
    return httpService.get( BASE_URL )
}