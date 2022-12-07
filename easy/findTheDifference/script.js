/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let res = 0;

  for (const c of t) {
    res += c.charCodeAt();
  }

  for (const c of s) {
    res -= c.charCodeAt();
  }

  return String.fromCharCode(res);
};
