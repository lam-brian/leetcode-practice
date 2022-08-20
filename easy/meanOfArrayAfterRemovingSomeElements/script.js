/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  let total = arr.length;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }

  let lowest = total * 0.05;

  while (lowest > 0) {
    sum -= arr.pop();
    sum -= arr.shift();
    total -= 2;
    lowest--;
  }

  return sum / total;
};
