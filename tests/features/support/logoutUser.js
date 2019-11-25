const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const {Builder, By} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

const PAGE_USEREMAIL_TEXTBOX = 'email-input';
const PAGE_USERPASSWORD_TEXTBOX = 'password-input';
const PAGE_LOGIN_BUTTON = 'loginbtn';
const CLASS_USER_EMAIL = 'member-name';

// before ? = login ?
Given('User with {string} and password {string} is on the login page', async function (email,  password) {
    await driver.get('http://localhost:8080/login');
    await driver.findElement(By.id(PAGE_USEREMAIL_TEXTBOX)).sendKeys(email);
    await driver.findElement(By.id(PAGE_USERPASSWORD_TEXTBOX)).sendKeys(password);
    await driver.findElement(By.id(PAGE_LOGIN_BUTTON)).click();
    driver.sleep(2000);
    var textPromise = driver.findElement(By.className(CLASS_USER_EMAIL)).getText();
    textPromise.then((text) => {
      assert.equal(text, "a@hotmail.com");
    });
  });

  When('the user press log out button', async function () {
    driver.sleep(3000);
    await driver.navigate().to('http://localhost:8080/logout');
  });

  Then('the user is logged out', async function () {
    driver.sleep(3000);
    assert.equal(await driver.getCurrentUrl(), "http://localhost:8080/");
    driver.close();
  });