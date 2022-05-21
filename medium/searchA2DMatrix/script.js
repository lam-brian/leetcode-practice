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
    let midRow = Math.floor((top + bot) / 2);
    if (target > matrix[midRow][cols - 1]) {
      top = midRow + 1;
    } else if (target < matrix[midRow][0]) {
      bot = midRow - 1;
    } else break;
  }

  if (top > bot) return false;

  let row = Math.floor((top + bot) / 2);
  let left = 0;
  let right = cols - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > matrix[row][mid]) {
      left = mid + 1;
    } else if (target < matrix[row][mid]) {
      right = mid - 1;
    } else return true;
  }
  return false;
};
