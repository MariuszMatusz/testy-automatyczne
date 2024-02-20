/// <reference types="cypress" />

describe("test związany z wybieraniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Wybranie filtra Instock", () => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value", "quantity:desc"); // sprawdz selecta czy ma ustawioną wartość - have
        cy.wait(4000);
        cy.get("#selectProductSort").select("name:desc");
        cy.get("#selectProductSort").should("have.value", "name:desc");
       
    })
   
})