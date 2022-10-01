/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const count = Array(26).fill(0);
  let res = words.length;

  for (const char of allowed) {
    const index = char.charCodeAt() - "a".charCodeAt();
    count[index]++;
  }

  for (const word of words) {
    for (const char of word) {
      const index = char.charCodeAt() - "a".charCodeAt();
      if (count[index] === 0) {
        res--;
        break;
      }
    }
  }

  return res;
};
