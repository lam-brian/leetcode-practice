/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  res = [];

  const backtrack = (left, right, str) => {
    if (right > left) return;
    if (left === n && right === n) {
      res.push(str);
      return;
    }
    if (left < n) backtrack(left + 1, right, str + "(");
    if (right < n) backtrack(left, right + 1, str + ")");
  };
  backtrack(0, 0, "");
  return res;
};
