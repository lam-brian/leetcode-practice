/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let leftEmptyPot;
    let rightEmptyPot;
    if (flowerbed[i] === 0) {
      if (i === 0 || flowerbed[i - 1] === 0) leftEmptyPot = true;
      if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        rightEmptyPot = true;

      if (leftEmptyPot && rightEmptyPot) {
        flowerbed[i] = 1;
        count++;
      }

      if (count === n) return true;
    }
  }

  return count >= n;
};
