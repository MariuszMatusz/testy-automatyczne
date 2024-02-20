// import { searchPhrase } from "../fixtures/SearchDate.json"

class Seach {
    get searchBox () {
        return cy.get("#search_query_top");
    }

    // typeSearchPrhrase() {
    //     this.searchBox.type(searchPhrase);
        
    // }
      typeSearchPrhrase(searchValue) {
        this.searchBox.type(searchValue);
        
    }

    clearSearchPhrase() {
        this.searchBox.clear();
    }
}

export default new Seach;