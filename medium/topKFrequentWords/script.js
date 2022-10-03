/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freqMap = new Map();
  const bucket = Array.from({ length: words.length + 1 }, () => []);
  const res = [];

  for (const word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  for (const [word, freq] of freqMap) {
    bucket[freq].push(word);
  }

  for (let i = bucket.length - 1; i > 0; i--) {
    if (!bucket[i].length) continue;
    bucket[i].sort();
    for (const word of bucket[i]) {
      res.push(word);
      if (res.length === k) return res;
    }
  }
};
