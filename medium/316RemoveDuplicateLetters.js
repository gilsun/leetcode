/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let strLastIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    strLastIndex[s[i]] = i;
  }

  console.log("strLastIndex", strLastIndex);

  let stack = [];
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!seen.has(char)) {
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        i < strLastIndex[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop());
      }
      seen.add(char);
      stack.push(char);
    }
  }
  console.log("stack", stack);
  return stack.join("");
};
