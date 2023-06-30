import { Given, When, Then } from 'cucumber';
import LoginPage from '../features/login.page';



Given('I am on the login page', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
});

// When('I enter username {string} and password {string}', async (username, password) => {
//   await loginPage.enterCredentials(username, password);
// });

// When('I click on the login button', async () => {
//   await loginPage.clickLoginButton();
// });

// Then('I should be logged in successfully', async () => {
//   await loginPage.verifyLoggedIn();
// });