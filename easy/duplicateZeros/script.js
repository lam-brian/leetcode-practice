/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let size = arr.length;
  let count = 0;
  while (count < size) {
    if (arr[0] === 0) arr.push(0);
    const num = arr.shift();
    arr.push(num);
    count++;
  }
  while (arr.length > size) {
    arr.pop();
  }
};
