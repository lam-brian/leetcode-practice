/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = new Map();

  let res = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, freq] of map) {
    if (freq === 1) res += num;
  }

  return res;
  // const bucket = [];
  // let res = 0;
  // for (const num of nums) {
  //   if (!bucket[num]) bucket[num] = [];
  //   bucket[num].push(num);
  // }
  // for (const num of bucket) {
  //   if (num && num.length === 1) res += num[0];
  // }
  // return res;
};
