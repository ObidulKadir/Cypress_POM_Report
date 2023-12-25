class DashBoardPage{
    ClickOnPIM(){
        const locator = require('../Locators/DashBoardPageLocator.json')
        const method = require('../Utilities/commonMethods')

        cy.xpath(locator.PIM_xpath).click()
        method.time()
        method.takeFullScreenShot("afterPIMclick")
    }
}
export default DashBoardPage