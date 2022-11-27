/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();
  const set = new Set();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, freq] of map) {
    if (set.has(freq)) return false;
    set.add(freq);
  }

  return true;
};
