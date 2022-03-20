var sortedSquares = function(nums) {
     let num= nums.length
       let ans =[]
     for(let i = 0 ; i<num ; i++ ){
       let sqrt =nums[i]* nums[i]
       ans.push(sqrt)
}
return ans.sort(function(a, b){return a - b})
};


console.log(sortedSquares([-4,-1,0,3,10]))