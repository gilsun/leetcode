class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums) # nums = [-1, -3, 0, 60] 같은 경우를 위해서 
        curMin, curMax = 1, 1 
        
        for n in nums: 
            if n == 0:
                curMin, curMax = 1, 1
                continue 
            temp = curMin * n 
            curMin = min(n * curMax, n* curMin, n)
            curMax = max(n * curMax, temp, n)
          
            res = max(res, curMax)
        
        return res 