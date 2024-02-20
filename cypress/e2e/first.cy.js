/// <reference types="cypress" />

describe("Mój pierwszy test automatyczny", () => {
    it("Otworzenie strony google.com", () => {
        cy.visit("https://google.com")  //cypres odwiedź mi stornę
    }) //tworzymy stepy
})  // describe ma za zadanie opisać, czym będzie zajmowął się etst