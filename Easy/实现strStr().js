/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number} 
 * @description  KMP 算法
 * 执行用时 : 88 ms, 在Implement strStr()的JavaScript提交中击败了94.97% 的用户
 * 内存消耗 : 34.1 MB, 在Implement strStr()的JavaScript提交中击败了39.64% 的用户
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
}


/* 执行用时 : 120 ms, 在Implement strStr()的JavaScript提交中击败了36.97% 的用户
内存消耗 : 34.5 MB, 在Implement strStr()的JavaScript提交中击败了36.26% 的用户 */

var strStr = function (haystack, needle) {
    if (needle == '') {
        return 0
    }
    var haystackArr = haystack.split('')
    var needleArr = needle.split('')
    var i = 0, j = 0

    while (i < haystackArr.length && j < needleArr.length) {
        
        if (haystackArr[i] == needleArr[j]) {
            i++;
            j++;
        } else {
            i = i - j + 1; // 一旦不匹配，i后退
            j = 0; // j归0
        }
    }
    if (j == needleArr.length) {
        return i - j;
    } else {
        return -1;
    }
}

