/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home"
import Women from "../pages/Women"

describe("test związany z zaznaczaniem checkboxów", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category"); // should - asercja - weryfikacja czy otrzymany wynik jest zgodny z oczekiwanie   //include - powinien zawierać 
      
    })
    it("Zaznaczenie chceckboxa w zakładce Women", () => {
    //    cy.get('#layered_category_4').check();
        Women.checkTops();
       // cy.get('#layered_category_4').should("be.checked"); // asercja be- jest i się wuybiera, zaznaczona, wybrana itd
        Women.topsCheckBox.should("be.checked");
    // //    cy.get('#layered_category_4').should("not.be.checked"); // negacja be 
    //    cy.get('#layered_category_8').check();
        Women.checkDresses();
    //    cy.get('#ul_layered_id_attribute_group_1 input').check();
        Women.checkSizes();
    })
})