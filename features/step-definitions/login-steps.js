import { Given, When, Then } from '@wdio/cucumber-framework'

import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'

Given(/^I am on the front page$/, async () => {
    await FrontPage.open()
});

When(/^I try to login correctly$/, async () => {
    await FrontPage.login('wibowo.bullseye', 'bullseye')
});

When(/^I try to login with \"([^\"]*)\" and \"([^\"]*)\"$/, async (username, password) => {
    await FrontPage.login(username, password)
});

Then(/^I am successfully login$/, async () => {
    await HomePage.verifyLoginSuccess('wibowo.bullseye')
});

Then(/^I am successfully login with \"([^\"]*)\"$/, async (username) => {
    await HomePage.verifyLoginSuccess(username)
});