var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let waterContain = (right - left) * Math.min(height[right], height[left]);
    max = Math.max(waterContain, max);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};
