/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const storage = {};

  for (const letter of s) {
    storage[letter] = (storage[letter] || 0) + 1;
  }

  for (const letter of t) {
    if (!storage[letter]) return false;
    storage[letter]--;
  }

  return true;
};
