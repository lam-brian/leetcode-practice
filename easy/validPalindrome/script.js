/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;

  // Built in functions
  // let str = "";
  // for (const char of s) {
  //   if (isAlphanumeric(char)) str += char;
  // }

  // return str.split("").reverse().join("").toLowerCase() === str.toLowerCase();
};

const isAlphanumeric = (c) => {
  return (
    ("A".charCodeAt() <= c.charCodeAt() &&
      c.charCodeAt() <= "Z".charCodeAt()) ||
    ("a".charCodeAt() <= c.charCodeAt() &&
      c.charCodeAt() <= "z".charCodeAt()) ||
    ("0".charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= "9".charCodeAt())
  );
};
