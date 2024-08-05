import { httpService } from './http.service.js'

// import {httpService} from './user-storage.service.js'

// const BASE_URL = 'user/'
const BASE_URL = 'recycling_bins'

export const binsService = {
    query,
}

function query(  ) {
    return httpService.get( BASE_URL )
}