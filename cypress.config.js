const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-testrail',
  reporterOptions: {
    domain: 'https://gowtham23121991.testrail.io',  // TestRail instance domain
    username: 'gowtham.wc@gmail.com',         // Your TestRail username
    apiKey: 'Gowthn@5',            // Your TestRail API key
    projectId: '2',               // The TestRail project ID
    suiteId: '3',                   // The TestRail suite ID
    createRun: true,                            // Automatically create a new test run
    updateResults: true,                        // Automatically update the results
    runName: `Cypress Test Run - ${new Date().toISOString()}`, // Custom name for the test run
    includeAll: true,                            // Include all test cases or use custom filtering
    debug: true
  },
  
  defaultCommandTimeout: 30000,
  env: {
    MAILOSAUR_API_KEY: "jUEZs4HvEvtE6FXljjA9pVDllh6DGEEQ",
  },
  e2e: {
    specPattern : "cypress/src/specs/login.spec.cy.js",
    baseUrl: "https://portal.staging.evolus-dev.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

