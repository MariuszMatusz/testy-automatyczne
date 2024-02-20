class BaseSteam {
   steamLoginPage() {
        cy.visit("https://steamcommunity.com/openid/loginform/")
    }

   reportUserPage() {
        cy.visit("https://steamcommunity.com/profiles/76561199533094934/")
   }


}

export default new BaseSteam;