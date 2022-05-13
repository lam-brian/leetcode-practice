/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
