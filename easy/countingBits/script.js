/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // O(nlogn)
  // const res = new Array(n + 1).fill(0);
  // for (let i = 1; i <= n; i++) {
  //     let num = i;
  //     while (num !== 0) {
  //         res[i] += num % 2;
  //         num >>>= 1;
  //     }
  // }
  // return res;

  // O(n)
  const dp = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};
