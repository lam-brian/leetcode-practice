/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const backtrack = (open, close, str) => {
    if (open < close) return;
    if (open === n && close === n) {
      res.push(str);
      return;
    }
    if (open < n) backtrack(open + 1, close, str + "(");
    if (close < n) backtrack(open, close + 1, str + ")");
  };
  backtrack(0, 0, "");
  return res;
};
