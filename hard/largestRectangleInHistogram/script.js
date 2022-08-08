/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  let res = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();
      res = Math.max(res, height * (i - index));
      start = index;
    }
    stack.push([start, heights[i]]);
  }
  return res;
};
