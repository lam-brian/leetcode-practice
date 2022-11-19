/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);

  let res = 0;

  for (const num of numSet) {
    if (numSet.has(num - 1)) continue;

    let length = 1;

    while (numSet.has(num + length)) {
      length++;
    }
    res = Math.max(res, length);
  }
  return res;
};
