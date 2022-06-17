/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) return true;

  let length = s.length;
  let count = 0;

  while (count < length) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
    count++;
  }
  return false;
};
