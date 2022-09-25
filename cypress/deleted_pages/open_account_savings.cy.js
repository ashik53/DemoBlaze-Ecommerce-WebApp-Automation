

it('check table', function () {
    cy.get('#login2').click();
    cy.wait(1000)// need to wait because different pop up will not get next values
    cy.get('#loginusername').type('ashik');
    cy.get('#loginpassword').type('ashik');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(3000);
    
    
    
})