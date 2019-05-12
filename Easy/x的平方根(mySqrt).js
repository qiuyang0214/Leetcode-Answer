/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x));
};

/* 执行用时 : 124 ms, 在Sqrt(x)的JavaScript提交中击败了77.72% 的用户
内存消耗 : 35.9 MB, 在Sqrt(x)的JavaScript提交中击败了15.40% 的用户
 */
var mySqrt = function(x) {
  let result = Math.sqrt(x);
  let resultArr = result.toString().split("");
  let index = resultArr.indexOf(".");
  if (index !== -1) {
    result.splice(index);
  }
  return resultArr.join("");
};
mySqrt(8);
