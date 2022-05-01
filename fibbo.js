

const fibbo = (num)=>{

    let a = 0, b = 1
    
    while(num--) {
        [a,b] = [b, a + b]
    }
    return a

    
}

console.log(fibbo(3))