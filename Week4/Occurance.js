
const nums = [2,4,5,2,1,2];

function countOccurance(arr, num) {  
    let count = 0;  
    const k=2;
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] === k) {
            count++;
        }
    }
    return count;
}   