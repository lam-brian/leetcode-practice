/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = new Map();
  const bucket = Array.from({ length: nums.length + 1 }, () => []);
  const res = [];

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (const [n, c] of count) {
    bucket[c].push(n);
  }

  for (let i = bucket.length - 1; i > 0; i--) {
    if (!bucket.length) continue;
    for (const num of bucket[i]) {
      res.push(num);
      if (res.length === k) return res;
    }
  }
};
