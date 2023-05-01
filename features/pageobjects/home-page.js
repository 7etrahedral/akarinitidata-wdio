import Page from './page.js'

class HomePage extends Page {

    //element selector
    get accountName() {
        return $(`#nameofuser`)
    }

    //action method
    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

}

export default new HomePage()