var threeSum = function (nums) {
  const results = [];
  let target = 0;

  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b);
  debugger;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
