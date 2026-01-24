// Red Bus and Flipkart Test Suite

import  { test,chromium,webkit } from "@playwright/test"


test(`Test to launch browser`,async() => {

    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto(`https://www.redbus.in`)



},

test(`Test to launch browser in webkit`,async() => {

    const browser = await webkit.launch({headless:false})
    const context = await browser.newContext()
    const page2 = await context.newPage()
    await page2.goto(`https://www.flipkart.com`)



}


)   
)