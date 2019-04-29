/**
 * @param {string[]} strs
 * @return {string}
 * @description 
 * 执行用时 : 168 ms, 在Longest Common Prefix的JavaScript提交中击败了6.22% 的用户
 * 内存消耗 : 36.1 MB, 在Longest Common Prefix的JavaScript提交中击败了14.70% 的用户
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) { return "" }
    strs.sort((a, b) => {
        return a.split('').length - b.split('').length
    })
    let len = strs[0].split('').length // 获取最短字符串的长度 即遍历次数
    let container = []

    for (let i = 0; i < len; i++) {
        let isSame = true
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i])
                isSame = false
        }
        if (i == 0 && isSame == false)
            return ""
        if (isSame)
            container.push(strs[0][i])
    }
    return container.join('')
};
