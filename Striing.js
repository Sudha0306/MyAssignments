/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. Example:1
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.*/
function lengthof(s) {
console.log('The length of the string is '+s.length);

    //let trimmedString = s.trim();   
    const myArray = s.split(" ");
///let word = myArray[1];
   console.log(myArray[myArray.length - 1].length);
}     lengthof("Hello World");  

/* Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length */
function lengthOfLastWord(s) {
    
    let trimmedString = s.trim();       
   
    const wordsArray = trimmedString.split(" ");
    
    const lastWord = wordsArray[wordsArray.length - 1]; 
   
    const lengthOfLastWord = lastWord.length;
  
    return lengthOfLastWord;
}
lengthOfLastWord("   fly me   to   the moon  ");

/* Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result */

function isAnagram(txt1, txt2) {

    // Input: isAnagram('listen', 'silent')
    
//let txt = "Hello World";
let trimtxt = txt1.trim();  
const lowerCaseTxt = trimtxt.toLowerCase();
    //console.log(lowerCaseTxt);

const sortedStr1 = lowerCaseTxt.split('').sort().join('');
    console.log(sortedStr1);

    let trimtxt2 = txt2.trim();  
const lowerCaseTxt2 = trimtxt2.toLowerCase();
    //console.log(lowerCaseTxt2);

const sortedStr2 = lowerCaseTxt2.split('').sort().join('');
    console.log(sortedStr2);

    if (sortedStr1 === sortedStr2) {
        console.log("The strings are anagrams.");
    } else {
        console.log("The strings are not anagrams.");
    }

}isAnagram('listen', 'silent');