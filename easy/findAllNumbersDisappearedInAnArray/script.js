/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // mark existing
  for (const num of nums) {
    const i = Math.abs(num) - 1;
    nums[i] = -1 * Math.abs(nums[i]);
  }

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) res.push(i + 1);
  }
  return res;
};
