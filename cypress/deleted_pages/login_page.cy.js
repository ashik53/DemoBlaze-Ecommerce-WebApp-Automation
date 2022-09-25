

it('Home page verification', ()=> {
   // cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC") ;
    cy.contains('Experience the difference')

    // visit about us page
    cy.get('.leftmenu > :nth-child(2) > a').click();
    cy.go('back');
    cy.url().then(url=> {
        let locat_url  = url.substring(0, url.indexOf('?'));
        //cy.log("index url" + url)
        assert.equal(locat_url, "https://parabank.parasoft.com/parabank/index.htm")
    })

    //visit services page

    cy.get('.leftmenu > :nth-child(3) > a').click()
    cy.go('back');
    cy.url().then(url=> {
        let locat_url  = url.substring(0, url.indexOf('?'));
        //cy.log("back url is url is "+ url);
        assert.equal(locat_url, "https://parabank.parasoft.com/parabank/index.htm")
    })
    //visit products page
    cy.get('.leftmenu > :nth-child(4) > a').click();
   //cy.wait(2500);
    cy.go('back');
    
    cy.url().then(url=> {
        let locat_url  = url.substring(0, url.indexOf('?'));
       // cy.log("url is "+ url);
        assert.equal(locat_url, "https://parabank.parasoft.com/parabank/index.htm")
    })
    //
    
    //visit Locations page
    cy.get('.leftmenu > :nth-child(5) > a').click();
    cy.go('back');
    
    cy.url().then(url=> {
        let locat_url  = url.substring(0, url.indexOf('?'));
      //  cy.log("url is "+ url);
        assert.equal(locat_url, "https://parabank.parasoft.com/parabank/index.htm")
    }) 

    //visit Admin page
    cy.get('.leftmenu > :nth-child(6) > a').click()
    cy.go('back');
    cy.url().then(url=> {
        let locat_url  = url.substring(0, url.indexOf('?'));
      //  cy.log("url is "+ url);
        assert.equal(locat_url, "https://parabank.parasoft.com/parabank/index.htm")
    }) 

})


//Register to parabank

it.only('Register to ParaBank', ()=> {
    cy.get('#login2');
    //cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC") ;
    /*cy.get('#loginPanel > :nth-child(3) > a').click()
    // cypress was not able to get by id , so finding the element by this format
    cy.get('input[name="customer.firstName"]').type("ashik")
    cy.get('input[name="customer.lastName"]').type('iqbal');
    cy.get('input[name="customer.address.street"]').type('colonel road');
    cy.get('input[name="customer.address.city"]').type('Road 9');
    cy.get('input[name="customer.address.state"]').type('Dhaka Uddan');
    cy.get('input[name="customer.address.zipCode"]').type('Mohammodpur');
    cy.get('input[name="customer.phoneNumber"]').type('01915019665');
    cy.get('input[name="customer.ssn"]').type('7654');
    cy.get('input[name="customer.username"]').type('ashik3');
    cy.get('input[name="customer.password"]').type('ashik3');
    cy.get('input[name="repeatedPassword"]').type('ashik3');
    
    cy.get('[colspan="2"] > .button').click() 
    */
})


it('login to ParaBank', ()=> {
   
    cy.get(':nth-child(2) > .input').type("afia");
    cy.get(':nth-child(4) > .input').type("Appleiphone5s");
    cy.get(':nth-child(5) > .button').click();   
})


// fund transfer from checking to checking

it("Fund transfer; Saving to Checking", ()=> {
    //Savings
    
   //cy.contains('21225').click()
    //cy.contains('34212')
   // cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    //login again
    cy.get(':nth-child(2) > .input').type("afia");
    cy.get(':nth-child(4) > .input').type("Appleiphone5s");
    cy.get(':nth-child(5) > .button').click();
    //click on transfer funds button
    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    cy.get('#amount').type("1");
    cy.get('select').should('have.value', 21447)
    //cy.get('#toAccountId').select(21447);

})



it('Logout to ParaBank', ()=> {
    cy.contains("Log Out").click();
})

/*

it('Provide email', ()=> {
    cy.visit("https://trello.com/")
    cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]').click()
    cy.get('#user').type("ashikiqbalpro@gmail.com");
    cy.get('#login').click()
    cy.get("#password.css-wxvfrp").type('Appleiphone5s'); 
    cy.get('#login-submit').click()
})

*/

