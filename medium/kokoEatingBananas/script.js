/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = Math.max(...piles);
  let k = right;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    let hoursToEat = 0;
    for (const pile of piles) {
      hoursToEat += Math.ceil(pile / mid);
    }

    if (hoursToEat <= h) {
      k = Math.min(k, mid);
      right = mid - 1;
    } else left = mid + 1;
  }

  return k;
};
