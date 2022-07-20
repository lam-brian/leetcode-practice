/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
      const row = new Set();
      const col = new Set();
      const box = new Set();
      for (let j = 0; j < 9; j++) {
          const r = board[i][j];
          const c = board[j][i];
          const b = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
          
          if (row.has(r) || col.has(c) || box.has(b)) return false;
          
          if (r !== '.') row.add(r);
          if (c !== '.') col.add(c);
          if (b !== '.') box.add(b);
      }
  }
  return true;
};

