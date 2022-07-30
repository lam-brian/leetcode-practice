/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  const countS1 = new Array(26).fill(0);
  const window = new Array(26).fill(0);
  
  for (const char of s1) {
      const index = char.charCodeAt() - 'a'.charCodeAt();
      countS1[index]++;
  }
  for (let i = 0; i < s1.length; i++) {
      const index = s2[i].charCodeAt() - 'a'.charCodeAt();
      window[index]++
  }
  let start = 0;
  let end = s1.length - 1;
  
  while (end < s2.length) {
      if (window.join('') === countS1.join('')) return true;
      end++;
      if (end === s2.length) break;
      const startIndex = s2[start].charCodeAt() - 'a'.charCodeAt();
      const endIndex = s2[end].charCodeAt() - 'a'.charCodeAt();
      window[startIndex]--;
      window[endIndex]++;
      start++;
  }
  return false;
};