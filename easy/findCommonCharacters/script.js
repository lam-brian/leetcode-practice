/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let originalChars = words[0].split("");
  for (let i = 1; i < words.length; i++) {
    let tempChars = words[i].split("");
    originalChars = originalChars.filter((char) => {
      let ind = tempChars.indexOf(char);
      return ind > -1 ? (tempChars[ind] = true) : false;
    });
  }
  return originalChars;
};
