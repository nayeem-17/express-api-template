const cache = require('node-cache')
const mycache = new cache({
    deleteOnExpire: true,
    stdTTL: 5
})

module.exports.createCache = (key, data) => {
    try {
        if (key != null && data != null) mycache.set(key, data)
        return true
    } catch (error) {
        return false
    }
}

module.exports.getCache = (key) => {
    try {
        if (key != null) {
            const data = mycache.get(key)
            if (data != null) return data
        }
    } catch (error) {
        return null;
    }
}

module.exports.deleteAll = () => {
    try {
        mycache.flushAll();
    } catch (error) {
        return false
    }
}

module.exports.stats = () => {
    return { stats: mycache.getStats() }
}