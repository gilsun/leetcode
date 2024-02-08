var depthSum = function (nestedList) {
  `
    TC = O(n)
    SC = O(n)
  
  
    BFS & Queue
    queue size fix 
    increase depth after check the first queue length 
  `;
  let queue = nestedList;
  let depth = 1;
  let total = 0;
  while (queue.length > 0) {
    let sizeQ = queue.length;
    for (let i = 0; i < sizeQ; i++) {
      let item = queue.shift();
      if (item.isInteger()) {
        total += item.getInteger() * depth;
      } else {
        for (let nestedItem of item.getList()) {
          queue.push(nestedItem);
        }
      }
    }
    depth++;
  }

  return total;
};
