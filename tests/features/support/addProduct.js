const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const {Builder, By} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
const {defineSupportCode} = require('cucumber');

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(10 * 1000);
});
const PAGE_USEREMAIL_TEXTBOX = 'email-input';
const PAGE_USERPASSWORD_TEXTBOX = 'password-input';
const PAGE_LOGIN_BUTTON = 'loginbtn';
const PURCHASE_DATE_TEXTBOX = 'getpurchasedate';
const PRODUCT_NAME_TEXTBOX = 'getproductname';
const PRODUCT_PRICE_TEXTBOX = 'getproductprice';
const WARRANTY_LENGTH_TEXTBOX = 'getproductwarranty';
const PRODUCT_STORE_TEXTBOX = 'getproductstore';
const PRODUCT_NOTE_TEXTBOX = 'getproductnotes';
const ADD_PRODUCT_TEXTBOX = 'addRecord';
const SUCCESS_POP_UP_STATUS = 'modalstatus';


Given('User is connected with email {string} and password {string} and logs in', async function (email, password) {    
    await driver.get('http://localhost:8080/login');
    await driver.findElement(By.id(PAGE_USEREMAIL_TEXTBOX)).sendKeys(email);
    await driver.findElement(By.id(PAGE_USERPASSWORD_TEXTBOX)).sendKeys(password);
    await driver.findElement(By.id(PAGE_LOGIN_BUTTON)).click();
  });

  When('User goes to page addProduct and types in datefield {string} and productnamefield {string} and productpricefield {string} and warrantylengthfield {string} and storefield {string} and notefield {string}', async function (datefield, productnamefield, productpricefield, warrantylengthfield, storefield, notefield) {
    driver.sleep(3000);
    await driver.navigate().to('http://localhost:8080/addProduct');
    await driver.findElement(By.id(PURCHASE_DATE_TEXTBOX)).sendKeys(datefield);
    await driver.findElement(By.id(PRODUCT_NAME_TEXTBOX)).sendKeys(productnamefield);
    await driver.findElement(By.id(PRODUCT_PRICE_TEXTBOX)).sendKeys(productpricefield);
    await driver.findElement(By.id(WARRANTY_LENGTH_TEXTBOX)).sendKeys(warrantylengthfield);
    await driver.findElement(By.id(PRODUCT_STORE_TEXTBOX)).sendKeys(storefield);
    await driver.findElement(By.id(PRODUCT_NOTE_TEXTBOX)).sendKeys(notefield);
    await driver.findElement(By.id(ADD_PRODUCT_TEXTBOX)).click();
  });

  Then('product should be successfully created', function () {
    driver.sleep(3000);
    var textPromise = driver.findElement(By.id(SUCCESS_POP_UP_STATUS)).getText();
    textPromise.then((text) => {
      assert.equal(text, "SUCCESS");
    });
    driver.close();
  });