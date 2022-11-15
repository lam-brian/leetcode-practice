/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const cache = {};

  for (const num of nums) {
    if (num in cache) return true;
    cache[num] = num;
  }

  return false;
};
