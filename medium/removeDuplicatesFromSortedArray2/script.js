/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 2;
  let left = 1;
  let count = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] === nums[right - 1]) {
      if (count < k) {
        nums[left] = nums[right];
        left++;
      }
      count++;
    } else {
      count = 1;
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
