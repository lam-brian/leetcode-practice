/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let quarter = Math.floor(arr.length / 4);

  for (let i = 0; i < arr.length - quarter; i++) {
    if (arr[i] === arr[i + quarter]) return arr[i];
  }
  return arr[-1];
};
