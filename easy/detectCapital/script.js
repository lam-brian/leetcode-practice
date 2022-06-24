/**
 * @param {string} word
 * @return {boolean}
 */

const checkCapital = (char) => {
  return (
    "A".charCodeAt() <= char.charCodeAt() &&
    char.charCodeAt() <= "Z".charCodeAt()
  );
};

var detectCapitalUse = function (word) {
  let capital = checkCapital(word[0]);
  let res = true;
  for (let i = 1; i < word.length; i++) {
    if (capital) {
      if (checkCapital(word[1])) {
        res = res && checkCapital(word[i]);
      } else {
        res = res && !checkCapital(word[i]);
      }
    } else {
      if (checkCapital(word[i])) res = false;
    }
  }
  return res;
};
