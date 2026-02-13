import {expect, test} from "@playwright/test";

test(`Lear Window Handling`, async ({page,context}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();    
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()="Merge Leads"]`).click();

    //const [childpage] = await Promise.all([page.context().waitForEvent("page"), page.locator(`//img[@src='/images/fieldlookup.gif']`).click()]);
  const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(0).click()]);

await childPage.locator(`//a[text()="10001"]`).nth(0).click();
//await childPage.locator(`//button[text()='Find Leads']`).click();   

await page.bringToFront(); // to bring the control back to parent page

const [childpage1] = await Promise.all([context.waitForEvent("page"), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(1).click()]);

await childpage1.locator(`//a[text()="10001"]`).nth(0).click();
await page.bringToFront();


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
await page.locator(`//a[@class="buttonDangerous"]`).click();

const result = page.locator(".errorMessageHeader");
await expect(result).toHaveText("The Following Errors Occurred:"); // assertion to verify the result after accepting the alert  
console.log((result));

})