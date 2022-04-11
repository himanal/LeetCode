var maxSubArray = function(nums) {
    let maxSum = -1;
    let currSum;  
 for (var i = 0; i < nums.length; i++) {  
   currSum = 0;   
   for (var j = i; j < nums.length; j++) {   
     currSum += nums[j];    
     if (maxSum < currSum) {   
       maxSum = currSum;      
     }   
   } 
 } 
 return maxSum;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))