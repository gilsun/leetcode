/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   
    let result = []
    
    function backtrack ( currentCombination = [], index, currentTarget) {
        
     if (currentTarget === 0) {
          result.push([...currentCombination])
          return 
      }
     if (currentTarget < 0 ) return 
    
     for (let i = index; i < candidates.length; i++) {
         currentCombination.push(candidates[i])
         backtrack(currentCombination, i, currentTarget - candidates[i])
         currentCombination.pop()
     }
        
    }
    
    backtrack([], 0, target)
    
    return result 
    
};
    
