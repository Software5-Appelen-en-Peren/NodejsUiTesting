const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const And = Then;
const LoginPage = require('../pages/loginPage');
const timeouts = require('../support/constants');

// async needed to use await inside the function
Then('I should see a text box for entering the email', async function () {
  const loginPage = new LoginPage(this.driver);
  await this.driver.wait(async () => await loginPage.getUserEmailTextbox(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

Then('I should see a text box for entering the password', async function () {
    const loginPage = new LoginPage(this.driver);
    await this.driver.wait(async () => await loginPage.getUserPasswordTextbox(), timeouts.STEP_TIMEOUTS.TIMEOUT);
  });

  And('I should see a login button', async function () {
    const loginPage = new LoginPage(this.driver);
    await this.driver.wait(async () => await loginPage.getSignInButton(), timeouts.STEP_TIMEOUTS.TIMEOUT);
  });