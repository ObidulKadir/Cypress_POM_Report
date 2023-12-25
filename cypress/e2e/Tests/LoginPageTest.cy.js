import open_url from '../Base/OpenUrl'
import login from '../Pages/LoginPage'
import DashBoardPage from '../Pages/DashBoardPage'

describe('OrangeHRM', ()=>{
    //className objName = new className()
    const url = new open_url()
    const loginPage = new login()
    it('LoginTest', ()=>{
        url.openUrl()
        loginPage.loginProcess()
    })

})