var maxArea = function (height) {
  // initalize 2 pointers at both ends
  // calculate current area;
  // if left is less than right ? i++ : r--;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
};
