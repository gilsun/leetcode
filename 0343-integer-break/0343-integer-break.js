/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
const memo = {}
 if (n <= 3) {
     return n - 1
 }

 const dp = (num) =>{
   
    if(memo[num]) {
        return memo[num]
    }
     let res = num 
     for (let i = 1 ; i < num ; i ++) {
         let val = i * dp(num - i )
         res = Math.max(res,val)
     }
     memo[num] = res 
    return res 

 }

return dp(n)
}