it('Open a new bank account - CHECKING', ()=> {
    
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(2) > .input').type("ashik53");
    cy.get(':nth-child(4) > .input').type("Appleiphone5s");
    cy.get(':nth-child(5) > .button').click();  
    cy.get('#leftPanel > ul > :nth-child(1) > a').click(); 
    cy.get('#type').select('CHECKING');
    cy.get("#fromAccountId").select("34212")
    cy.get('form.ng-pristine > div > .button').click();
    cy.contains("Your new account number: ");

})