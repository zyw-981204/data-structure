function getURLParameters(_querystring) {
    // 字符串预处理 是否有问题
    const querystring = _querystring.indexOf('?') === 0 ? _querystring.slice(1) : _querystring;
    //  a=1&b=2&b=3 转换成数组
    const querystringArray = querystring.split('&');
    // a=xx b=xxx b=xxx
    // key=value

    // 遍历 array， 构建一个 hashMap
    const map = {};
    querystringArray.forEach(string => {
        const [key, value] = string.split('=');
        if (value) {
            if (key in map) {
                map[key] = Array.isArray(map[key]) ? [...map[key], value] : [map[key], value]
            } else {
                map[key] = value;
            }
        }
    });
    return map;
    // map = {a: [1], b: [2,3]}
    return Object.keys(map).reduce((pre, cur) => {
        const currentValue = map[cur].length > 1 ? map[cur] : map[cur][0];
        return {
            ...pre,
            [cur]: currentValue
        }
    }, {});
}

// {
//     b: {
//         0: 2,
//     }
// }

// a=1&b[0]=2&b[1]=3

getURLParameters('a=1&b=2&b=3');  // { a: '1', b: ['2', '3']}


console.log('res', getURLParameters('a=1&b=2&b=3'))