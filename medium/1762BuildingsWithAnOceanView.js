var findBuildings = function (heights) {
  // use stack
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
      stack.pop();
    }
    stack.push(i);
  }
  return stack;
};
var findBuildings = function (heights) {
  // use max from most right side
  let res = [];
  let n = heights.length;
  let max = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (heights[i] > max) {
      res.push(i);
      max = Math.max(max, heights[i]);
    }
  }
  console.log("res", res);
  return res.reverse();
};
