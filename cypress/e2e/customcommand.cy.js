/// <reference types="cypress" />
import { login, passwd} from "../fixtures/loginDate.json"

describe("Custom commands", () => {
    it("Logowanie do strony automationpractice.pl", () => {
        cy.login(login, passwd);
    })
})