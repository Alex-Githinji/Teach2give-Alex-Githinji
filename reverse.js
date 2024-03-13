function reverseInteger(num) {
    
    let numStr = num.toString();
    
    
    let reversedStr = numStr.split('').reverse().join('');
    
   
    let reversedNum = parseInt(reversedStr);
    
    return reversedNum;
}


let inputNum = love;
let reversedNum = reverseInteger(inputNum);
console.log(reversedNum);  
