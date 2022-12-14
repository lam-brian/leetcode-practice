/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = [];
  const res = new Array(score.length);

  for (let i = 0; i < score.length; i++) {
    sorted.push([i, score[i]]);
  }

  sorted.sort((a, b) => b[1] - a[1]);

  let point = 1;

  for (const [i, s] of sorted) {
    let placement;

    if (point === 1) {
      placement = "Gold Medal";
    } else if (point === 2) {
      placement = "Silver Medal";
    } else if (point === 3) {
      placement = "Bronze Medal";
    } else placement = point.toString();

    res[i] = placement;
    point++;
  }

  return res;
};
