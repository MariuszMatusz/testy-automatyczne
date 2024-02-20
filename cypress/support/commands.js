// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (login, password) => {
    cy.visit("/");
    cy.get("a.login").click();
    cy.get("#login_form").should("be.visible");
    cy.get("#email").type(login);
    cy.get("#passwd").type(password);
    cy.get("#SubmitLogin").click();
})

Cypress.Commands.add("steamLogin", (login, password) => {
    cy.get('input._2eKVn6g5Yysx9JmutQe7WV:first').type(login);
    cy.get('input[type="password"]').type(password);
    cy.get("button._2QgFEj17t677s3x299PNJQ").click();
})
