import {test} from "@playwright/test";

test('Test to learn Ennum', async ({page}) => { // {page}--> page
    enum Environment{
LOCAL,
DEVELOPMENT,
STAGING,
PRODUCTION
}
function runTests(env:Environment){
    return env
}
runTests(Environment.STAGING)
})  
