/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let res = "";
  for (const c of s) {
    if (
      "A".charCodeAt() <= c.charCodeAt() &&
      c.charCodeAt() <= "Z".charCodeAt()
    ) {
      const code = c.charCodeAt() + 32;
      res += String.fromCharCode(code);
    } else res += c;
  }
  return res;
};
