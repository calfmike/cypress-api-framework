const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://restful-booker.herokuapp.com",
    allowCypressEnv: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
