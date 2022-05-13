/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const cache = { ")": "(", "]": "[", "}": "{" };

  for (const char of s) {
    if (char in cache) {
      if (stack[stack.length - 1] === cache[char]) stack.pop();
      else return false;
    } else stack.push(char);
  }
  if (stack.length > 0) return false;
  return true;
};
