/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && stack[stack.length - 1][1] < temperatures[i]) {
          const [index, temp] = stack.pop();
          res[index] = i - index;
      }
      stack.push([i, temperatures[i]]);
  }
  return res;
};