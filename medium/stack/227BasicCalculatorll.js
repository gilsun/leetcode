/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  `
   check number => !inNaN()
   obtaining 123 => curNum * 10 + char
   Understanding the Difference between Math.floor() and Math.trunc()
   handle last index 
  `;

  let stack = [];
  let curNum = 0;
  let preOperator = "+";

  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];

    // case number
    if (!isNaN(parseInt(curChar))) {
      curNum = curNum * 10 + parseInt(curChar);
    }

    // case not a space and operator
    if ((isNaN(parseInt(curChar)) && curChar !== " ") || i === s.length - 1) {
      if (preOperator === "-") {
        stack.push(-curNum);
      }
      if (preOperator === "+") {
        stack.push(+curNum);
      }
      if (preOperator === "*") {
        stack.push(stack.pop() * curNum);
      }
      if (preOperator === "/") {
        stack.push(Math.trunc(stack.pop() / curNum));
      }
      preOperator = curChar;
      curNum = 0;
    }
  }
  let res = 0;
  while (stack.length > 0) {
    res += stack.pop();
  }
  return res;
};
