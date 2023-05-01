import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'

describe('Demoblaze app login scenario.', () => {
    it('Successfully login using correct username password', async () => {
        await FrontPage.open()

        await FrontPage.login('wibowo.bullseye', 'bullseye')
        await HomePage.verifyLoginSuccess('wibowo.bullseye')
    })
})