function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            console.log('get', target, key);
            return target[key]
        },
        set(target, key, value) {
            console.log('set', target, key);
            return target[key] = value
        }
    })
}


const a = reactive({});
a.aaa = '1'

console.log('a.aaa', a.aaa);
