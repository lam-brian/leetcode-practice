var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  for (const char of s1) {
    s1Count[char.charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < s1.length; i++) {
    window[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }

  let start = 0;
  let end = s1.length - 1;

  while (end < s2.length) {
    if (window.join("") === s1Count.join("")) return true;
    end++;
    if (end === s2.length) break;
    window[s2[start].charCodeAt() - "a".charCodeAt()]--;
    window[s2[end].charCodeAt() - "a".charCodeAt()]++;
    start++;
  }
  return false;
};

const s1 = "ab",
  s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));
