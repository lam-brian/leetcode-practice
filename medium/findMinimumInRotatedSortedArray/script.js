/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const _nums = [nums[nums.length - 1], ...nums, nums[0]];
  for (var i = 1; i < _nums.length - 1; i++) {
    if (_nums[i - 1] > _nums[i] && _nums[i] < _nums[i + 1]) {
      break;
    }
  }

  return Math.min(_nums[i - 1], _nums[i]);
};
