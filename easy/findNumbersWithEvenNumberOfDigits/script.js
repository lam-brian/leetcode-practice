/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0;

  for (const num of nums) {
    if (num.toString().length % 2 === 0) res++;
  }

  return res;
};
