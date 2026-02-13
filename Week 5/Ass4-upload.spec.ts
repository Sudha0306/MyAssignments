import {expect,test} from "@playwright/test";
import path from "path/win32";

test(`Learn fileUpload`,async ({page}) => {


await page.goto(`https://login.salesforce.com/`);

await page.locator("#username").fill(`dilipkumar.rajendran@testleaf.com`);
//await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")

await page.locator("#password").fill(`TestLeaf@2025`);

await page.locator(`input[name="Login"]`).click();

await page.getByTitle("App Launcher",{exact:true}).click();

await page.getByRole("button",{name:"View All Applications"}).click();

await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Accounts")

await page.waitForTimeout(3000)
await page.getByRole("link",{name:"Accounts"}).click();

//await page.getByRole("button",{name:"New"}).click();
//const newpage = context.waitForEvent("page");
await page.getByRole("button",{name:"New"}).click();
//const childPage = await newpage;
//const [childPage] = await Promise.all([context.waitForEvent('page'), page.getByRole("button",{name:"New"}).click()]);
// await childPage.getByAltText("New Account").isVisible();
// const title = await childPage.title();
// console.log(title);
//console.log(await childPage.title());
//await page.waitForTimeout(5000);
await page.getByRole("textbox", {name:"Account Name"}).fill("TestLeaf");
//await page.selectOption(`//select[@name="Type"]`,{label:"Prospect"})
// await childPage.getByLabel("Account Name").fill("TestLeaf");
//await page.getByRole("", {name:"Type"}).selectOption({label:"Prospect"})

//const dropdown = await page.getByRole('combobox', { name: 'Type' }).selectOption({value: 'Prospect'});

// await page.getByRole('option', { name: 'Prospect' }).click
// await page.locator(`#combobox-button-617`).
// await page.locator(`//span[@title="Prospect"]`).click();

// await page.locator(`//button[@id="combobox-button-617"]`).click();
// //await page.waitForResponse(response =>response.url().includes(`/type`)) && response.status() === 200);
// await page.locator(`//span[@title="Prospect"]`).click();
// await page.waitForTimeout(3000)


//await page.getByRole("combobox", {name:"Type"}).selectOption({label:"Prospect"});
//await page.getByRole('option', { name: 'Prospect' }).click();
//await page.getByRole('combobox', { name: 'Type' }).selectOption({label:"Prospect"})
// await page.waitForTimeout(3000)
//await page.getByRole('combobox', { name: 'Type' }).selectOption({label:"Prospect"})
// await page.waitForTimeout(3000)

// await page.getByText("Prospect",{exact:true}).click();  
//await page.getByRole('combobox').click();
//await page.getByRole('option', { name: 'Prospect' }).click();
//await childPage.locator(`//button[text()='Find Leads']`).click();   

//await page.bringToFront(); // to bring the control back to parent page
//await page.locator('css=custom-element >>> text=Prospect').

await page.locator(`button[aria-label="Type"]`).click();
await page.locator(`role=option[name='Prospect']`).click();

await page.locator(`button[aria-label="Industry"]`).click();
await page.locator(`role=option[name='Banking']`).click();
await page.locator('//button[text()="Save"]').click();
await expect(page).toHaveURL(/Account/);
await expect(page.getByRole("heading",{name:"TestLeaf"})).toBeVisible();
await page.waitForTimeout(3000)
 //const filePromise = await Promise.all([page.waitForEvent("filechooser"),page.locator(`input[type="file"]`).click()]);

const uploadfile = page.locator(`input[type="file"]`)
    //await filePromise.setInputFiles(path.join(__dirname,'../Data/image2.jpeg'))
    await uploadfile.setInputFiles(path.join(__dirname,'../Data/image2.jpeg'))

    await page.locator(`//span[text()="Done"]`).click();
    await expect(page.locator(`//span[text()="Done"]`)).toBeVisible();

})