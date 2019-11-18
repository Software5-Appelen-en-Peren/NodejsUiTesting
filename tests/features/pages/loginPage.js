'use strict';

const BasePage = require('./basePage');

const PAGE_IDENTIFIER = '.container-login100';
const PAGE_USEREMAIL_TEXTBOX = '#email-input';
const PAGE_USERPASSWORD_TEXTBOX = '#password-input';

const PAGE_LOGIN_BUTTON = '#loginbtn';
class LoginPage extends BasePage {

      constructor(driver) {
          super(driver, PAGE_IDENTIFIER);
      }

      async isPageLoaded() {
        return await this.exists();
      }

      async getUserEmailTextbox() {
        let email = await this.findElementByCss(PAGE_USEREMAIL_TEXTBOX);
        return email;
      }

      async getUserPasswordTextbox() {
        return await this.findElementByCss(PAGE_USERPASSWORD_TEXTBOX);
      }

      async getSignInButton() {
        return await this.findElementByCss(PAGE_LOGIN_BUTTON);
      }

      async signIn() {
        let loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
        loginButton.click();
      }

      async getLoginHeader() {
        return await this.findElementByCss(PAGE_LOGIN_HEADER);
      }

      async enterUserEmail(emailText) {
        const emailTextbox = await this.getUserEmailTextbox();
        emailTextbox.sendKeys(emailText);
      }

      async enterUserPassword(password) {
        const passwordTextbox = await this.getUserPasswordTextbox();
        passwordTextbox.sendKeys(password);

      }
}

module.exports = LoginPage;