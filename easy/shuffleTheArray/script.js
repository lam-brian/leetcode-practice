/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let left = 0;
  let right = n;
  const res = [];

  while (right < nums.length) {
    res.push(nums[left]);
    res.push(nums[right]);
    left++;
    right++;
  }
  return res;
};
