import {expect, test} from "@playwright/test";

test(`Test to learn Frames`, async ({page}) => { // {page}--> page

    await page.goto(`https://leafground.com/frame.xhtml`)  
    const frame = page.frames() 
    const innerframe = page.frameLocator(`[src="default.xhtml"]`)
    await innerframe.getByRole('button',{name:"Click Me"}).click()
    await expect(innerframe.getByText('Hurray! You Clicked Me.',{exact:true})).toBeVisible();

    console.log(`Total no of frames : ${frame.length}`);
 

const frame2 = page.frameLocator(`[src="page.xhtml"]`)
   const frame3=frame2.frameLocator(`[id="frame2"]`);
await frame3.locator("#Click").click();
await expect(frame3.locator("#Click")).toHaveText("Hurray! You Clicked Me.")



})