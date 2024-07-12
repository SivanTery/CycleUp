export const productStorageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType = 'product', filterBy = {}, delay = 500) {
    let entities = JSON.parse(localStorage.getItem(entityType)) || []
    if(filterBy.name && entities.length){
       entities = entities.filter(entity => {
           return entity.name.toLowerCase().includes(filterBy.name.toLowerCase())
        })
    }
    if(filterBy.garbageType && entities.length){
       entities = entities.filter(entity => {
           return entity.garbageType === filterBy.garbageType
        })
    }
    return entities
}

function get(entityType, entityId) {
    let entities = query(entityType)
        const entity = entities.find(entity => entity._id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))    
    newEntity._id = _makeId()
    let entities = query(entityType)
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
    let entities = query(entityType)
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
}

function remove(entityType, entityId) {
    let entities = query(entityType)
        const idx = entities.findIndex(entity => entity._id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}


function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}