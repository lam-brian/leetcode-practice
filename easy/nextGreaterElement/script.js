/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    let j = 0;

    while (j < nums2.length) {
      if (nums2[j] === nums1[i]) break;
      j++;
    }

    while (j < nums2.length) {
      if (nums2[j] > nums1[i]) {
        ans.push(nums2[j]);
        break;
      }
      j++;
    }

    if (j >= nums2.length) {
      ans.push(-1);
    }
  }

  return ans;
};
