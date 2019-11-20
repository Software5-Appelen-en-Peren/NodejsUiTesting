const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const {Builder, By} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

const PAGE_USEREMAIL_TEXTBOX = 'email-input';
const PAGE_USERPASSWORD_TEXTBOX = 'password-input';
const PAGE_LOGIN_BUTTON = 'loginbtn';

  Given('User is on the login page and types in {string} in email textbox and {string} in password text box', {timeout: 60 * 1000}, async function (email, password) {
    await driver.get('http://localhost:8080/login');
    await driver.findElement(By.id(PAGE_USEREMAIL_TEXTBOX)).sendKeys(email);
    await driver.findElement(By.id(PAGE_USERPASSWORD_TEXTBOX)).sendKeys(password);
  });

  When('User presses login button', async function () {
    await driver.findElement(By.id(PAGE_LOGIN_BUTTON)).click();
  });

  Then('User should be send to members page',{timeout: 10 * 1000},async function () {
    driver.sleep(3000);
    assert.equal(await driver.getCurrentUrl(), "http://localhost:8080/members");
    driver.close();
  });