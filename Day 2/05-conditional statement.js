/* function launchBrowser(browser) {
    if (browser === "Edge") {
        console.log("Launching Edge browser"); 
    } else if (browser === "Chrome") {
        console.log("Launching Chrome browser");
    } else if (browser === "Firefox") {
        console.log("Launching Firefox browser");
    } else {
        console.log("Browser not supported");
    } 
}

launchBrowser("Chrome");
launchBrowser("Edge");
launchBrowser("Safari");   */  

function runTests(type){

        switch (type) {
            case "Sanity":
                console.log("Running sanity tests");
                break;
            case "regression":
                console.log("Running regression tests");
                break;
            default:(smoke)
                console.log("Running smoke test type");
        }
    }runTests("Sanity");
    