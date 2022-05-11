/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const char of s) {
    if (char !== "]") stack.push(char);
    else {
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }
      stack.pop();
      let k = "";
      while (stack && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      stack.push(substr.repeat(k));
    }
  }
  return stack.join("");
};
