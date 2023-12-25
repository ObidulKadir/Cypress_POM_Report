import open_url from '../Base/OpenUrl'
import login from '../Pages/LoginPage'
import DashBoardPage from '../Pages/DashBoardPage'

describe('Go to the PffIM', ()=>{
    //className objName = new className()
    const url = new open_url()
    const loginPage = new login()
    const dashBoardPage = new DashBoardPage()
    it('Go to the PIM', ()=>{
        url.openUrl()
        loginPage.loginProcess()
        dashBoardPage.ClickOnPIM()
    })
})