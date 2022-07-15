/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
    const charCount = new Array(26).fill(0);
    for (const char of str) {
      charCount[char.charCodeAt() - "a".charCodeAt()]++;
    }
    if (!map[charCount]) map[charCount] = [];
    map[charCount].push(str);
  }
  return Object.values(map);

  // const map = {};
  // for (const str of strs) {
  //    const key = str.split('').sort().join('');
  //     if (!map[key]) map[key] = [];
  //     map[key].push(str);
  // }
  // return Object.values(map);
};
