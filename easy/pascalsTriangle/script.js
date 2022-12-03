/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const prevRow = res[res.length - 1];
    const row = [1];

    for (let j = 0; j < prevRow.length - 1; j++) {
      row.push(prevRow[j] + prevRow[j + 1]);
    }

    row.push(1);
    res.push(row);
  }

  return res;
};
