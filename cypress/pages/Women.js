class Women {
    get topsCheckBox() {
        return cy.get('#layered_category_4');
    }

    get dressesCheckBox() {
        return cy.get('#layered_category_8');
    }

    get sizeCheckBox() {
        return cy.get('#ul_layered_id_attribute_group_1 input');
    }

    checkTops() {
        this.topsCheckBox.check();
    }

    checkDresses() {
        this.dressesCheckBox.check();
    }

    checkSizes() {
        this.sizeCheckBox.check();
    }
}

export default new Women;