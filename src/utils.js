class Utils {
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj))
    }
}

export default Utils