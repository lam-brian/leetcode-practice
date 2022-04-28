var containsDuplicate = function (nums) {
  const storage = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (storage.has(nums[i])) return true;
    else storage.add(nums[i]);
  }
  return false;
};
