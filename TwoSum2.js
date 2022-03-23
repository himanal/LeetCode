var twoSum = function(nums, target) {

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i+1, j+1]
                }
            }
        }

    
};


console.log(twoSum([1,2,3,5,6,],4))