function reverseString(strg) {
   /*  let stringname="Teastleaf"
    console.log("Original String is : +reverseString"); */
    
    let splitString = strg.split("");
    // let reverseArray = splitString.reverse();
    let reversed = "";
    for (let i = strg.length - 1; i >= 0; i--) {
    reversed += strg[i];

    // return reversed;
}   
if (strg===reversed ) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}   
}reverseString("Teastleaf");
