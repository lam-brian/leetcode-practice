/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) return false;
  const stack = [];
  const cache = { ")": "(", "]": "[", "}": "{" };
  for (const char of s) {
    if (char in cache) {
      if (stack[stack.length - 1] === cache[char]) stack.pop();
      else return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};
