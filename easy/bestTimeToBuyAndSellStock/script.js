/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let left = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[left] >= prices[right]) left = right;
    res = Math.max(prices[right] - prices[left], res);
  }

  return res;
};
