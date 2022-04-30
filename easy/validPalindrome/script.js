/**
 * @param {string} s
 * @return {boolean}
 */

const isAlphaNumeric = (c) => {
  return (
    ("A".charCodeAt() <= c.charCodeAt() &&
      c.charCodeAt() <= "Z".charCodeAt()) ||
    ("a".charCodeAt() <= c.charCodeAt() &&
      c.charCodeAt() <= "z".charCodeAt()) ||
    ("0".charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= "9".charCodeAt())
  );
};

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};
