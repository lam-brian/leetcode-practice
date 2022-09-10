/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // using hashmap
  const cache = new Map();
  for (const num of nums) {
    if (cache.has(num)) cache.delete(num);
    else cache.set(num, num);
  }
  return [...cache.keys()][0];

  // using bit manipulation
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
};
