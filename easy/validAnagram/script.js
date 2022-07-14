/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const countS = {};

  for (const char of s) {
    countS[char] = (countS[char] || 0) + 1;
  }

  for (const char of t) {
    if (!countS[char]) return false;
    countS[char]--;
  }
  return true;
};
