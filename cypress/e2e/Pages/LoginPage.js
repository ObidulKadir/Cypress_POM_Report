class login{
    loginProcess(){
        const locator = require('../Locators/LoginPageLocator.json')
        const method = require('../Utilities/commonMethods.js')

        method.titleVerify("OrangeHRM")
        method.dataSend(locator.userName_xpath, locator.user_value)
        method.dataSend(locator.password_xpath, locator.password_value)

        method.time()

        method.takeSpecificSC(locator.submit_xpath, "submitButton")
        cy.xpath(locator.submit_xpath).click()

        method.time()
        method.takeFullScreenShot("afterLogin")
    }
}
export default login