var removeElement = function(nums, val) {
    let pointer1 = []
    for(let pointer2 = 0 ; pointer2<nums.length ; pointer2++){
        if( nums[pointer2] !== val){
            nums[pointer1]=nums[pointer2]
            pointer1++
        }
    }

    return pointer1
};  



console.log(removeElement([3,2,2,3], 3))