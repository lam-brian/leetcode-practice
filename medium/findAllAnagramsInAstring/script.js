/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];

  if (p.length > s.length) return res;

  const countS = new Array(26).fill(0);
  const countP = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    countS[s[i].charCodeAt() - "a".charCodeAt()]++;
    countP[p[i].charCodeAt() - "a".charCodeAt()]++;
  }

  let matches = 0;

  for (let i = 0; i < 26; i++) {
    if (countS[i] === countP[i]) matches++;
  }

  let left = 0;
  for (let right = p.length; right < s.length; right++) {
    if (matches === 26) res.push(left);

    const indexR = s[right].charCodeAt() - "a".charCodeAt();
    const indexL = s[left].charCodeAt() - "a".charCodeAt();

    countS[indexR]++;
    if (countS[indexR] === countP[indexR]) matches++;
    else if (countS[indexR] - 1 === countP[indexR]) matches--;

    countS[indexL]--;
    if (countS[indexL] === countP[indexL]) matches++;
    else if (countS[indexL] + 1 === countP[indexL]) matches--;

    left++;
  }

  if (matches === 26) res.push(left);

  return res;
};
