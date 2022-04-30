/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxP = 0;
  let currP = 0;

  for (let i = 1; i < prices.length; i++) {
    currP = Math.max(0, currP + prices[i] - prices[i - 1]);
    maxP = Math.max(maxP, currP);
  }
  return maxP;
};
