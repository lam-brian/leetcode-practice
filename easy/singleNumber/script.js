/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const cache = new Map();
  for (const num of nums) {
    if (cache.has(num)) cache.delete(num);
    else cache.set(num, num);
  }
  return [...cache.keys()][0];
};
