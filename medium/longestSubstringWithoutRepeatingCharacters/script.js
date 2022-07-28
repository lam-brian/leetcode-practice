/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const countS = new Set();
  let length = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (countS.has(s[right])) {
      countS.delete(s[left]);
      left++;
    }
    countS.add(s[right]);
    length = Math.max(length, right - left + 1);
  }
  return length;
};
