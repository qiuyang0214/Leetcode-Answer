/**
 * @param {number} num
 * @return {boolean}
 * @description
 * 执行用时 : 168 ms, 在Ugly Number的JavaScript提交中击败了19.21% 的用户
 * 内存消耗 : 35.6 MB, 在Ugly Number的JavaScript提交中击败了15.05% 的用户
 *
 */
var isUgly = function(num) {
  //2147483647
  //-2147483648
  if (num == 1) {
    return true;
  }
  if (-2147483648 > num || num > 2147483647 || num == 0) {
    return false;
  }
  var isUgly = false;
  (function getUgly(num) {
    debugger;
    if (!String(num / 2).includes(".")) {
      if (num / 2 == 1) {
        isUgly = true;
        return;
      } else {
        getUgly(num / 2);
      }
    } else if (!String(num / 3).includes(".")) {
      if (num / 3 == 1) {
        isUgly = true;
        return;
      } else {
        getUgly(num / 3);
      }
    } else if (!String(num / 5).includes(".")) {
      if (num / 5 == 1) {
        isUgly = true;
        return;
      } else {
        getUgly(num / 5);
      }
    } else {
      return;
    }
  })(num);

  return isUgly;
};

/*
执行用时 : 116 ms, 在Ugly Number的JavaScript提交中击败了95.77% 的用户
内存消耗 : 35.3 MB, 在Ugly Number的JavaScript提交中击败了51.61% 的用户
*/
var isUgly = function(num) {
  if (num == 1) return true;
  if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0) return false;
  while (num > 1) {
    let tmp = num;
    if (num % 2 == 0) {
      num = num / 2;
    }
    if (num % 3 == 0) {
      num = num / 3;
    }
    if (num % 5 == 0) {
      num = num / 5;
    }
    if (num == 1) {
      return true;
    }
    if (tmp == num) {
      return false;
    }
  }
  return false;
};
