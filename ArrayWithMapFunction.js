const numbers = [-1,2,-3,-4,0,1,5]
output= numbers.filter((num)=>num>0).map((num)=>num*2).reduce((accV,curV)=>accV*curV,1);
console.log(output)