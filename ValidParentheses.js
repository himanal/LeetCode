


const parentheses = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  
  const isValid = (s) => {
    if (s.length % 2) {
      return false;
    }
    
    const stack = [];
    for (let char of s) {
      const pairedRightParenthesis = parentheses.get(char);
      
      // is left parenthesis
      if (pairedRightParenthesis) {   
        stack.push(pairedRightParenthesis);
        continue;
      }
      
      // is right parenthesis
      const waitForPaired = stack.pop();
      if (char !== waitForPaired) {
        return false;
      }
    }
    
    return !stack.length;
  };

console.log( isValid( "()","{}"))
