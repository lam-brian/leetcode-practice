/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  if (text.length < 7) return 0;

  const countText = {};
  const balloon = {};

  for (const char of text) {
    countText[char] = (countText[char] || 0) + 1;
  }

  for (const char of "balloon") {
    balloon[char] = (balloon[char] || 0) + 1;
  }

  console.log(balloon);

  let res = text.length;

  for (const char in balloon) {
    res = Math.min(res, Math.floor((countText[char] || 0) / balloon[char]));
  }

  return res;
};
