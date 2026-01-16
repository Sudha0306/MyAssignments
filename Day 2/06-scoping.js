genderType = "male";
function printGender() {
    console.log("Gender is: " + genderType);

    let functionscoped = "Brown";
    console.log("Function scoped hair color is: " + functionscoped);
    if (genderType==='female') {
        var age = 30;
        let blockscoped = "Pink";
        console.log("Block scoped hair color is: " + blockscoped);

        
    } else {
        console.log("Age is: " + age); // Accessible due to var scoping
    }
}   printGender(genderType);