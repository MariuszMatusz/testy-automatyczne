/// <reference types="cypress" />

describe("otworzenie strony google i przejście na stronę foto-mar.pl", () => {
    it("przejście na stronę", () => {
        cy.visit("https://google.pl");
        cy.get("#APjFqb").type("foto-mar.pl {enter}");
    })
    it("przejście na stronę foto-mar", () => {
        cy.get(".v7jaNc.ynAwRc.MBeuO.q8U8x.oewGkc.LeUQr.htnRc").select("Foto-MaR Mariusz Matuszewsk");
    })
})