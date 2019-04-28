/**
 * @param {number} x
 * @return {boolean}
 */
// 遍历数组 第 i位 与和 length-1-i位 比较
var isPalindrome = function (x) {
    let arr = x.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false
        }
    }
    return true
};