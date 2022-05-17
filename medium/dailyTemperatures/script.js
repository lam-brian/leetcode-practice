/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const stackIndex = stack.pop();
      res[stackIndex] = i - stackIndex;
    }
    stack.push(i);
  }
  return res;
};
