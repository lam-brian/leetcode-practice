/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const res = [];
  const freqMap = new Map();
  const bucket = [];

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
};
