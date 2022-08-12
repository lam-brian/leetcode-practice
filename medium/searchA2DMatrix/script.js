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
    const midRow = Math.floor((top + bot) / 2);
    if (matrix[midRow][cols - 1] < target) top = midRow + 1;
    else if (matrix[midRow][0] > target) bot = midRow - 1;
    else break;
  }
  if (top > bot) return false;
  let row = Math.floor((top + bot) / 2);
  let left = 0;
  let right = cols - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (matrix[row][mid] < target) left = mid + 1;
    else if (matrix[row][mid] > target) right = mid - 1;
    else return true;
  }
  return false;
};
