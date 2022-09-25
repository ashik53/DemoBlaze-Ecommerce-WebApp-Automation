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






// creating cypress session from cmd so that it can be accessed from anywhere in the project
Cypress.Commands.add("login", (name, password) => {
    cy.session([name, password], () => {
        cy.visit('https://www.demoblaze.com/index.html#')
        cy.get('#login2').click();
        cy.wait(1000)// need to wait because different pop up will not get next values
        cy.get('#loginusername').type('ashik');
        cy.get('#loginpassword').type('ashik');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000);


        //validate the welcome text
        cy.get('#nameofuser').should('have.text', 'Welcome ashik');
    })
})