/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const count = {};
  let single = 0;
  let res = 0;
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const [char, c] of Object.entries(count)) {
    if (c % 2 === 0) res += c;
    else if (c > 1 && c % 2 === 1) {
      res += Math.floor(c / 2) * 2;
      if (single < 1) {
        res += 1;
        single++;
      }
    } else if (c === 1 && single < 1) {
      res += 1;
      single++;
    }
  }

  return res;
};
