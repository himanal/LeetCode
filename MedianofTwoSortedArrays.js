var findMedianSortedArrays = function(nums1, nums2) {
    
    let concat = nums1.concat(nums2)
    concat = concat.sort(function(a , b){ return b - a} )
    let len = concat.length 
    
    if(len%2==1){
        return concat[(len/2)-.5]
    }else{
        return (concat[len/2]+concat[(len/2)-1])/2
    }


}