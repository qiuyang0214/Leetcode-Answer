/**
 * @param {number} x
 * @return {number}
 */
// Math.pow(2, 31) - 1 == 2147483647
// Number("-" + Math.pow(2, 31)) == -2147483648

var reverse = function (x) {
    let result = Math.abs(x).toString().split('').reverse().join('') * (x > 0 ? 1 : -1)
    return result > (Math.pow(2, 31) - 1) ? 0 : (result < Number("-" + Math.pow(2, 31)) ? 0 : result)
}; 
