/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const neededValue = target - nums[i];
    if (cache[neededValue] !== undefined) return [cache[neededValue], i];
    cache[nums[i]] = i;
  }
};
