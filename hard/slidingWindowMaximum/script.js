/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const stack = [];
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[stack[stack.length - 1]] <= nums[right]) stack.pop();
    stack.push(right);
    if (left > stack[0]) stack.shift();
    if (right + 1 >= k) {
      res.push(nums[stack[0]]);
      left++;
    }
  }
  return res;
};
