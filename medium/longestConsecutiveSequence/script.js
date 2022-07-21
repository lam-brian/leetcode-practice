/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let max = 0;
  for (const num of numSet) {
    if (numSet.has(num - 1)) continue;
    let length = 0;
    while (numSet.has(num + length)) {
      length++;
    }
    max = Math.max(max, length);
  }
  return max;
};
