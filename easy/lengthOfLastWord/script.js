/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let length = 0;

  while (s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};
