import {test} from "@playwright/test";

import mainpage from "../Data/login.json"

test(`Learn to read data from JSON file`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);   

    await page.locator("#username").fill(mainpage.Username);
    await page.locator("#password").fill(mainpage.Password);
    await page.locator(".decorativeSubmit").click();    
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.locator("#createLeadForm_companyName").fill(mainpage.CompanyName);
    await page.locator(`#createLeadForm_firstName`).fill(mainpage.FirstName);
    await page.locator(`#createLeadForm_lastName`).fill(mainpage.LastName);

    //label
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"})

    await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{label:"Demo Marketing Campaign"})

     const dropdown = page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`); 
    const dropDownCount = await dropdown.count();
    
    for (let index = 0; index < dropDownCount; index++) {
       
        console.log( await dropdown.nth(index).innerText());
    }

    await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index:5})
    await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:"INR"})
    await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:"IND"})
    await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{label:"TAMILNADU"})
    await page.waitForTimeout(3000) 
   
     const dropdown1 = page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`); 
    const dropDownCount1 = await dropdown1.count();
    
    for (let index = 0; index < dropDownCount1; index++) {
       
        console.log( await dropdown1.nth(index).innerText());
        //await page.waitForTimeout(3000);
    }

    await page.locator(`//input[@class="smallSubmit"]`).click();


})