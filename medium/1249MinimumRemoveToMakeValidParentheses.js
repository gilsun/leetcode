var minRemoveToMakeValid = function (s) {
  let stack = [];
  let removeIndex = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }
    if (s[i] === ")") {
      if (stack.length === 0) {
        removeIndex.add(i);
      }
      stack.pop();
    }
  }
  console.log("stack", stack);
  console.log("removeIndex", removeIndex);

  while (stack.length > 0) {
    removeIndex.add(stack.pop());
  }

  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (!removeIndex.has(i)) {
      res += s[i];
    }
  }

  return res;
};
