/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) return true;

  let x1 = coordinates[0][0];
  let y1 = coordinates[0][1];
  let x2 = coordinates[1][0];
  let y2 = coordinates[1][1];

  for (let i = 2; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];

    if ((y2 - y1) * (x1 - x) != (y1 - y) * (x2 - x1)) return false;
  }
  return true;
};
