/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();
    for (let j = 0; j < 9; j++) {
      let r = board[i][j];
      let c = board[j][i];
      let b =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (row.has(r) || col.has(c) || box.has(b)) return false;
      if (r !== ".") row.add(r);
      if (c !== ".") col.add(c);
      if (b !== ".") box.add(b);
    }
  }
  return true;
};
