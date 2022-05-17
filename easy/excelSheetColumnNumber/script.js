/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let columnNum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let currentNum = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    columnNum += currentNum * Math.pow(26, columnTitle.length - 1 - i);
  }
  return columnNum;
};
