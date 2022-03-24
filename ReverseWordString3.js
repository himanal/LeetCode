var reverseWords = function(s) {
 
        let arr = s
   
   let ans = arr.split(" ")
    for(let i = 0 ; i<ans.length ; i++){
      ans[i] = ans[i].split('').reverse().join("")

    }
    return ans.join(' ')
};  


console.log(reverseWords("Let's take LeetCode contest"))