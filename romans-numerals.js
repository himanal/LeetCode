var romanToInt = (e)=> {
    
        const romanKey ={
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
   let answer =[];
   for(let i = 0 ; i <e.length ; i++){

       if(romanKey[e[i]] < romanKey[e[i+1]]){
           answer.push(romanKey[e[i+1]]-romanKey[e[i]]);
            
           i++;
      
       } else{
           answer.push(romanKey[e[i]])
       }
   }
   return answer.reduce((total, current)=> total+current)
};
 
console.log(romanToInt('CMXCI'))