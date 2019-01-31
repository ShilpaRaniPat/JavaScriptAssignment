const numberInput=window.prompt();
const strInput = numberInput.toString();
const result = [strInput[0]];
  
for(let x=1; x<strInput.length; x++)
  {
    if((strInput[x-1]%2 === 0)&&(strInput[x]%2 === 0))
     {
      result.push('-', strInput[x]);
     }
    else
     {
      result.push(strInput[x]);
     }
  }
console.log(result.join(''));
