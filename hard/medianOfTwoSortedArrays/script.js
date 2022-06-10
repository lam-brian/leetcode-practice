/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1;
  let B = nums2;
  let total = A.length + B.length;
  let half = Math.floor(total / 2);
  if (A.length > B.length) [A, B] = [B, A];

  let left = 0;
  let right = A.length - 1;
  while (true) {
    let midA = Math.floor((left + right) / 2);
    let midB = half - midA - 2;

    let leftA = midA >= 0 ? A[midA] : Number.NEGATIVE_INFINITY;
    let rightA = midA + 1 < A.length ? A[midA + 1] : Number.POSITIVE_INFINITY;
    let leftB = midB >= 0 ? B[midB] : Number.NEGATIVE_INFINITY;
    let rightB = midB + 1 < B.length ? B[midB + 1] : Number.POSITIVE_INFINITY;

    if (leftA <= rightB && leftB <= rightA) {
      if (total % 2 === 0) {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      } else return Math.min(rightA, rightB);
    } else if (leftA > rightB) {
      right = midA - 1;
    } else left = midA + 1;
  }
};
