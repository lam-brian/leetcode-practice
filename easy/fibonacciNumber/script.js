/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const backTrack = (n) => {
    if (n <= 1) return n;

    return backTrack(n - 1) + backTrack(n - 2);
  };
  return backTrack(n);
};
