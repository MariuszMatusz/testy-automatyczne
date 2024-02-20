/// <reference types="cypress" />

describe("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakłądkę contant us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click(); //pobierz element na stronie  i .click - kliknij 

    } )
})