import Page from './page.js'

class FrontPage extends Page {

    //element locator
    get linkTextLogin() {
        return $(`[data-target='#logInModal']`)
    }

    get inputUsername() {
        return $(`#loginusername`)
    }

    get inputPassword() {
        return $(`#loginpassword`)
    }

    get buttonLogin() {
        return $(`[onclick='logIn()']`)
    }

    //action method
    async login(username, password) {
        await this.linkTextLogin.click()
        await this.isBtnLoginDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)

        await this.buttonLogin.click()
    }

    async isBtnLoginDisplayed() {
        await (await this.buttonLogin).waitForDisplayed(2000)
        return await (await this.buttonLogin).isDisplayed()
    }

    open() {
        return super.open('index.html')
    }

}

export default new FrontPage()