var characterReplacement = function (s, k) {
  const count = {};
  let length = 0;
  let maxChar = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (!count[s[right]]) count[s[right]] = 0;
    count[s[right]]++;
    maxChar = Math.max(maxChar, count[s[right]]);

    if (right - left + 1 - maxChar > k) {
      count[s[left]]--;
      left++;
    }
    length = Math.max(length, right - left + 1);
  }
  return length;
};

const s = "AABABBA";
console.log(characterReplacement(s, 1));
