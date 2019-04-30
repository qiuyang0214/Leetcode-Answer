/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @description 执行用时 : 212 ms, 在Reverse String的JavaScript提交中击败了66.05% 的用户
 *              内存消耗 : 46.5 MB, 在Reverse String的JavaScript提交中击败了79.22% 的用户
 */
var reverseString = function (s) {
    return s.reverse()
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @description 执行用时 : 1624 ms, 在Reverse String的JavaScript提交中击败了5.18% 的用户
 *              内存消耗 : 47.6 MB, 在Reverse String的JavaScript提交中击败了5.07% 的用户
 */
var reverseString = function (s) {
    const len = s.length
    for (let i = len; i > 0; i--) {
        let tem = s.splice(i - 1, 1)
        s.push(tem.join(''))
    }
    return s
}; 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @description 执行用时 : 208 ms, 在Reverse String的JavaScript提交中击败了74.47% 的用户
 *              内存消耗 : 46.5 MB, 在Reverse String的JavaScript提交中击败了80.58% 的用户
 */

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];// js 交换变量值 ES6 解构赋值 
        left++;
        right--;
    }
    return s
};