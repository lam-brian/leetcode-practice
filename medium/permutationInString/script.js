/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Using Arrays ////////////////////////////
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt() - "a".charCodeAt()]++;
    s2Count[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }

  let matches = 0;

  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    let indexR = s2[right].charCodeAt() - "a".charCodeAt();
    let indexL = s2[left].charCodeAt() - "a".charCodeAt();

    s2Count[indexR]++;
    if (s1Count[indexR] === s2Count[indexR]) matches++;
    else if (s1Count[indexR] + 1 === s2Count[indexR]) matches--;

    s2Count[indexL]--;
    if (s1Count[indexL] === s2Count[indexL]) matches++;
    else if (s1Count[indexL] - 1 === s2Count[indexL]) matches--;

    left++;
  }

  return matches === 26;
};

// Using Objects //////////////////////////////////////

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const countS1 = {};
  const countS2 = {};

  for (let i = 0; i < s1.length; i++) {
    countS1[s1[i]] = (countS1[s1[i]] || 0) + 1;
  }

  let need = Object.keys(countS1).length;
  let have = 0;
  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    let char = s2[right];
    countS2[char] = (countS2[char] || 0) + 1;
    if (char in countS1 && countS2[char] === countS1[char]) have++;

    if (right - left + 1 === s1.length) continue;

    if (have === need) return true;

    char = s2[left];
    countS2[char]--;
    if (char in countS1 && countS2[char] + 1 === countS1[char]) have--;
    left++;
  }

  return false;
};
