/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let rightMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = rightMax;
    rightMax = Math.max(rightMax, temp);
  }

  return arr;
};
