/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let postFix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postFix;
    postFix *= nums[i];
  }
  return result;
};
