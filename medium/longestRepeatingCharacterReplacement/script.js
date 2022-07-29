/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = {};
  let maxF = 0;
  let length = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxF = Math.max(maxF, count[s[right]]);
    if (right - left + 1 - maxF > k) {
      count[s[left]]--;
      left++;
    }
    length = Math.max(length, right - left + 1);
  }
  return length;
};
