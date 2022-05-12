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
  let result = [-1, -1];
  let length = Number.MAX_VALUE;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    window[char] = (window[char] || 0) + 1;

    if (char in countT && window[char] === countT[char]) have++;

    while (need === have) {
      if (right - left + 1 < length) {
        result = [left, right];
        length = right - left + 1;
      }
      window[s[left]]--;
      if (s[left] in countT && window[s[left]] < countT[s[left]]) have--;
      left++;
    }
  }
  [left, right] = result;
  return s.slice(left, right + 1);
};
