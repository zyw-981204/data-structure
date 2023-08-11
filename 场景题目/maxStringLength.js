// 用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可。用 map 维护字符的索引，遇到相同的字符，把左边界移动过去即可。挪动的过程中记录最大长度：



// abcabcdabcdef
function getMaxStringLength(s) {
    if (s.length <= 1) {
        return s.length;
    }

    let i = 0;
    const windows = [];
    // 记录对应字符串的位置 需要实时更新成最新的
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        const ns = s[i];

        if (!windows.includes(ns)) {
            windows.push(ns);
        } else {
            const newIndex = windows.indexOf(ns);
            windows.splice(0, newIndex + 1);
            windows.push(ns);
        }
        maxLength = Math.max(maxLength, windows.length);
    }
    return maxLength

}

console.log('getMaxStringLength', getMaxStringLength('abcabcdabcdef'));