/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length || t === "") return "";
  const countT = {};
  const window = {};
  for (const char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }
  let have = 0;
  let need = Object.keys(countT).length;
  let length = Number.MAX_VALUE;
  let res = [-1, -1];
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    window[char] = (window[char] || 0) + 1;
    if (window[char] === countT[char]) have++;
    while (have === need) {
      if (right - left + 1 < length) {
        res = [left, right];
        length = right - left + 1;
      }
      window[s[left]]--;
      if (window[s[left]] < countT[s[left]]) have--;
      left++;
    }
  }
  [left, right] = res;
  return s.slice(left, right + 1);
};
