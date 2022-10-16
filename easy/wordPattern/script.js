/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map1 = {};
  const map2 = {};
  const words = s.split(" ");

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const pat = pattern[i];
    const word = words[i];

    if (
      (pat in map1 && word !== map1[pat]) ||
      (word in map2 && pat !== map2[word])
    )
      return false;
    map1[pat] = word;
    map2[word] = pat;
  }
  return true;
};
