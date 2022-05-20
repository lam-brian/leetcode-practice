/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bot = rows - 1;
  while (top <= bot) {
    let row = (top + bot) / 2;
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }
  if (top > bot) return false;
  let row = (top + bot) / 2;
  let left = 0;
  let right = cols - 1;
  while (left <= right) {
    let mid = (left + right) / 2;
    if (target > matrix[row][mid]) {
      left = mid + 1;
    } else if (target < matrix[row][mid]) {
      right = mid - 1;
    } else return true;
  }
  return false;
};
