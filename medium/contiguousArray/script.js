/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let count = 0;
  let maxLength = 0;
  const hash = { 0: -1 };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    } else if (nums[i] === 1) {
      count++;
    }

    if (count in hash) {
      maxLength = Math.max(maxLength, i - hash[count]);
    } else {
      hash[count] = i;
    }
  }
  return maxLength;
};
