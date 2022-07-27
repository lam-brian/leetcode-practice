/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let maxP = 0;
  let left = 0;
  for (let right = 1; right < prices.length; right++) {
      if (prices[left] > prices[right]) left = right;
      maxP = Math.max(maxP, prices[right] - prices[left]);
  }
  return maxP;
};