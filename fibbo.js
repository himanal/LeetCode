

const fibbo = (num)=>{

    var n1 = 0
    var n2 =1
    let ans
    for(let i = 0 ; i <= num.length ; i++){
        ans= n1 + n2
        n1 = n2
        n2 = ans
    }
    return ans

    
}

console.log(fibbo(3))