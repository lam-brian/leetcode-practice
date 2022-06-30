/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  const swap = (i, j) => {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  while (i <= right) {
    if (nums[i] === 0) {
      swap(left, i);
      left++;
    } else if (nums[i] === 2) {
      swap(i, right);
      right--;
      i--;
    }
    i++;
  }
};
