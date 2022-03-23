// first Solution

var moveZeroes = function(nums) {

   
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
    };

// second Solution 
    var moveZeroes2 = function(nums) {
        let pointer = 0
        for (let i in nums){
            if (nums[i] !== 0){
                [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
                pointer++
            }
        }
        return nums
    };
console.log(moveZeroes([1,0,0,0,0,0,0,0,00,0,2,34,2,4,0,0,214,12]))