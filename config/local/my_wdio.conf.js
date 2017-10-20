exports.config = {

    // Host address of the running Selenium server.
    host: "0.0.0.0",
    port: 4444,
    path: "/wd/hub",
        
    specs: [
        "../../spec/*.js"
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [{
        browserName: "chrome"
    }],

    debug: false,

    framework: "mocha",
    reporters: ["spec"],
    reporterOptions: {
        outputDir: "./results"
    },
    mochaOpts: {
        ui: "tdd",
        timeout: "60s",
        compilers: ["js:babel-register"]
    },

    sync: true,
    waitforTimeout: 10000,
    logLevel: "error",
    coloredLogs: true,
    screenshotPath: "./results/errorShots/",

}