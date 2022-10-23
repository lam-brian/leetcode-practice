/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num === ".") continue;

      const grid = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

      if (!rows[i]) rows[i] = new Set();
      if (!cols[j]) cols[j] = new Set();
      if (!squares[grid]) squares[grid] = new Set();

      if (rows[i].has(num) || cols[j].has(num) || squares[grid].has(num))
        return false;

      rows[i].add(num);
      cols[j].add(num);
      squares[grid].add(num);
    }
  }

  return true;
};
