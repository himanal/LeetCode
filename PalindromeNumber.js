var isPalindrome = function(x) {

   let ans = parseFloat(x.toString().split('').reverse().join(''))
    if( x === ans ){
        return true
    } else{
        return false
    }
    
};
console.log(isPalindrome(-121))