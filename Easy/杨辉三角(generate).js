/**
 * @param {number} numRows
 * @return {number[][]}
 * @description 执行用时 : 88 ms, 在Pascal's Triangle的JavaScript提交中击败了90.76% 的用户
 *              内存消耗 : 34.2 MB, 在Pascal's Triangle的JavaScript提交中击败了5.02% 的用户
 */
var generate = function (numRows) {
    let arr = []
    for (let i = 1; i <= numRows; i++) {
        let row = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                row.push(1)
            } else {
                row.push(arr[i - 2][j - 1] + arr[i - 2][j])
            }
        }
        arr.push(row)
    }
    return arr
};

