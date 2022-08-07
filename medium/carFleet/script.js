/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = [];
  const stack = [];
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }
  cars.sort((a, b) => b[0] - a[0]);
  for (const [p, s] of cars) {
    stack.push((target - p) / s);
    if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2])
      stack.pop();
  }
  return stack.length;
};
