var lengthOfLongestSubstring = function (s) {
  const cache = new Set();
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    while (cache.has(s[right])) {
      cache.delete(s[left]);
      left++;
    }
    cache.add(s[right]);
    result = Math.max(result, right - left + 1);
  }
  return result;
};

const s = "aab";
console.log(lengthOfLongestSubstring(s));
