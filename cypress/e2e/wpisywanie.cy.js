/// <reference types="cypress" />
import Base from "../pages/Base"
import Search from "../pages/Search";
import {searchPhrase, notFoundProduct} from "../fixtures/SearchDate.json"
import ResultPage from "../pages/ResultPage";

describe("Wpisywanie tekstu w wyszukiwarkę", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        // cy.get("#search_query_top").type("Przykładowa treść");
        // Search.typeSearchPrhrase("Ziomek");
        Search.typeSearchPrhrase(searchPhrase);
        // cy.get("#search_query_top").should("have.value", "Przykładowa treść");
        Search.searchBox.should("have.value" , searchPhrase);
        cy.wait(3000);
        // cy.get("#search_query_top").clear();
        Search.clearSearchPhrase();

        cy.wait(3000);

        // cy.get("#search_query_top").type("Przykładowa treść {enter}");
        Search.typeSearchPrhrase(`${searchPhrase} {enter}`);  // ${} - odwołanie się do zmiennej w ""
        // cy.get("p.alert").should("be.visible").and("include.text", "No results");   //be.visible - sprawdz czy ale rt jest widoczny // and - dodatkowo sprawdź mi czy zawiera // include.text - zawiera text
        ResultPage.searchAlert.should("be.visible").and("include.text" , notFoundProduct);
        // cy.get("#search_query_top").should("have.class", "search_query");  // czy ma klasę
        Search.searchBox.should("have.class", "search_query");
        // cy.get("#search_query_top").should("have.css", "margin-right", "1px") //czy ma css i daną wartość
        Search.searchBox.should("have.css", "margin-right", "1px")
    })
})