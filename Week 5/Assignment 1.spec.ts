import {expect, test} from "@playwright/test";


test(`Learn to automate alert interactions using Playwright`, async({page})=>{

await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`)
page.on("dialog", async (alert) => {

    const message = alert.message();
    const type = alert.type();
    console.log(message);
    console.log((type));  
    if (type === "alert") {
        await alert.dismiss();
    }   
    else if (type === "confirm") {
        await alert.accept();
    }else if (type === "prompt") {
        await alert.dismiss();
    }
})
//await page.locator("#iframeResult").filter({ hasText: "Try it" }).locator('//button[@onclick="myFunction()"]').click();  

const frame = page.frameLocator("#iframeResult");
await frame.locator('//button[text()="Try it"]').click();

const result = frame.locator("#demo");
await expect(result).toHaveText("You pressed OK!"); // assertion to verify the result after accepting the alert  
console.log((result));

})
