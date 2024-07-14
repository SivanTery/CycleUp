// import { httpService } from './http.service.js'

import {productStorageService} from './product-storage.service.js'

// const BASE_URL = 'product/'
const BASE_URL = 'product'


export const productService = {
    query,
    save,
    getGarbageTypes,
    getDefaultFilter,
    getEmptyProduct
}

function query(filterBy = getDefaultFilter()) {
    return productStorageService.query(BASE_URL, filterBy)
}


function get(filterBy = getDefaultFilter()) {
    const queryParams = `?name=${filterBy.name}`
    return productStorageService.get(BASE_URL + queryParams)
}

function save(product) {
    console.log( 'product' , product);
    if (product._id) {
        return productStorageService.put(BASE_URL, product)
    } else {
        return productStorageService.post(BASE_URL, product)
    }
}


function getGarbageTypes() {
    return {
       כחול: 'נייר',
       כתום: 'חבילות + פלסטיק',
       סגול: 'זכוכית',
    }
}

function getDefaultFilter() {
    return { 
        name: '',
        garbageType: '',
     }
}

function getEmptyProduct() {

    return {
            name: "",
            garbageType: ""
    }
}