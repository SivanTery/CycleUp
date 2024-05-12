// import { httpService } from './http.service.js'

import { storageService } from './async-storage.service.js'

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
    return storageService.query(BASE_URL, filterBy)
}


function get(filterBy = getDefaultFilter()) {
    const queryParams = `?name=${filterBy.name}`
    return storageService.get(BASE_URL + queryParams)
}

function save(product) {
    console.log( 'product' , product);
    if (product._id) {
        return storageService.put(BASE_URL, product)
    } else {
        return storageService.post(BASE_URL, product)
    }
}


function getGarbageTypes() {
    return {
       ירוק: 'מעורב', 
       כחול: 'נייר', 
       כתום: 'חבילות + פלסטיק',
       חום: 'אורגני',
       סגול: 'זכוכית',
       אפור: 'מתכת',

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
            company: "",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxynqa9f2uuEIWMpfD_BUm_Z4SvtccDhDv6g&s",
            garbageType: ""
    }
}

