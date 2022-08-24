/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);

  const total = arr.length;
  const removalCount = total * 0.05;
  const left = 0 + removalCount;
  const right = total - removalCount;
  let sum = 0;

  for (let i = left; i < right; i++) {
    sum += arr[i];
  }

  return sum / (right - left);
};
