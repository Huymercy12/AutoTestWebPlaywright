import { Page ,expect} from '@playwright/test';

export default class LoginPage {
  private page: Page;
  private usernameInputSelector = '#username';
  private passwordInputSelector = '#password';
  private loginButtonSelector = '#login-button';
  private successMessageSelector = '.success-message';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    await this.page.goto('https://example.com/login');
  }

  async enterCredentials(username: string, password: string) {
    await this.page.fill(this.usernameInputSelector, username);
    await this.page.fill(this.passwordInputSelector, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }

  async verifyLoggedIn() {
    await this.page.waitForSelector(this.successMessageSelector);
    const successMessage = await this.page.textContent(this.successMessageSelector);
    expect(successMessage).toBe('Logged in successfully');
  }
}