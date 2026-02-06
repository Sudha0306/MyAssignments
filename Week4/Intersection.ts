

let arrays1:any = [];
let arrays2:any = [];

function intersection(arg1: string | any[], arg2: string | any[]){
const resultArray:any  =[]; 
for (let index = 0; index < arg1.length; index++) {
    const value = arg1[index]
    if(arg2.includes(value) && !resultArray.includes(value)){       
    resultArray.push(value);
}}

return resultArray

}
    
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersection([1, 2, 3, 4], [5, 6, 7, 8])); 


