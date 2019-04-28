/**
 * @param {string} s
 * @return {number}
 * @description
 * 执行用时 : 296 ms, 在Roman to Integer的JavaScript提交中击败了60.91% 的用户
 * 内存消耗 : 40 MB, 在Roman to Integer的JavaScript提交中击败了63.68% 的用户
 * 遍历 找到适合规则的对应的数字，两位数的情况 i++
 */

var romanToInt = function (s) {
    const rule = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    const str = s.split('')
    var num = 0
    for (let i = 0; i < str.length; i++) {
        if (rule[str[i] + str[i + 1]]) {
            num += rule[str[i] + str[i + 1]]
            i++
        } else {
            num += rule[str[i]]
        }
    }
    return num
}; 