/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const cache = {};
  for (const num of nums) {
    if (cache[num] !== undefined) return true;
    cache[num] = num;
  }
  return false;
};
