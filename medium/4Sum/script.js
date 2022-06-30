/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        }
      }
    }
  }
  return res;
};
