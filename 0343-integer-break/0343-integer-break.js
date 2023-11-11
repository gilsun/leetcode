/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {


/*
1) dp & memorization 

2) 3을 곱해서 푸는 방법 

n = 10
3 * 3* 4  = 36 
5 * 3* 2 = 30 


n = 2 (1 * 1) = 1 
n = 3 (1 * 2 )= 2 
n = 4 (2 * 2) = 4 
 

 1) dp & memorization 
 */

//  let memo = {}
//  if (n <= 3) {
//      return n - 1
//  }

//  const dp = (num) =>{

//  }

// return dp(n)


    const memo = {};
   if (n <= 3) {
        return n - 1;
    }

    function dp(num) {
        // if (num <= 3) {
        //     return num;
        // }

        if (memo[num]) {
            return memo[num];
        }

        let ans = num;
        for (let i = 2; i < num; i++) {
            let val = i * dp(num - i)
            ans = Math.max(ans,val);
        }

        memo[num] = ans;
        return ans;
    }

 
    return dp(n);



}