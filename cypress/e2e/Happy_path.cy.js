
describe('happy_path', () => {


    

    beforeEach(() => {
        cy.login("ashik", "ashik")
        cy.visit('https://www.demoblaze.com/index.html#')
    })


    it('Buy at least one item from each category', function () {
        //find out how to get dynamic elements 
        //buy an item from Phones category
        //buying first item


        cy.get("#tbodyid>div>div>a").eq(0).click()
        cy.get('.col-sm-12 > .btn').click()

        //after adding a product item in cart,an alert will be fired
        cy.on('window:alert', (text) => {
            let message = text.substring(0, text.indexOf('.'));
            assert.equal(message, "Product added")
        })
        cy.go('back');
        cy.go('back');

        //buy an item from Laptops category

        //click on the Laptop category
        cy.contains("Laptops").click()
        cy.wait(1000);
        //buying fourth item from the laptop category
        cy.get("#tbodyid>div>div>a").eq(3).click()
        cy.get('.col-sm-12 > .btn').click()

        //after adding a product item in cart,an alert will be fired
        cy.on('window:alert', (text) => {
            let message = text.substring(0, text.indexOf('.'));
            assert.equal(message, "Product added")
        })

        cy.wait(1000);
        cy.go('back');
        cy.go('back');

        //buy an item from Monitor category
        cy.contains("Monitors").click()
        cy.wait(1000);

        //buying second item from the monitor category
        cy.get("#tbodyid>div>div>a").eq(1).click()
        cy.get('.col-sm-12 > .btn').click()

        //after adding a product item in cart,an alert will be fired
        cy.on('window:alert', (text) => {
            let message = text.substring(0, text.indexOf('.'));
            assert.equal(message, "Product added")
        })

        cy.wait(1000);
        cy.go('back');
        cy.go('back');

    })

    it("Verify prices on cart", function () {
        //navigate to the cart
        cy.get(':nth-child(4) > .nav-link').click()

        // verify cart items total price == displayed total price



        let calculated_price = 0;
        cy.get('#tbodyid>tr').should("have.length", 3)
        cy.get('#tbodyid>tr').each(function ($row, i, $rows) {


            cy.wrap($row).within(function () {
                cy.get("td").each(function ($cellData, index, $columns) {
                    if (index == 2) {
                        calculated_price += parseInt($cellData.text())
                        cy.log("calculated price " + calculated_price);
                    }
                })

            }).then(() => {
                if (i == 2) {
                    cy.get('#totalp').should('have.text', calculated_price.toString());
                }
            })





        })

    })

    it("final order", function () {
        cy.get(':nth-child(4) > .nav-link').click()
        //Final order

        //click on order button
        cy.contains("Place Order").click();
        cy.get("#name").type("ashik");
        cy.get("#country").type("bangladesh");
        cy.get("#city").type("Dhaka");
        cy.get("#card").type("773473747347BERR")
        cy.get("#month").type("january")
        cy.get("#year").type("2022");
        cy.contains("Purchase").click()
        cy.wait(2000);
        cy.get('.sweet-alert > h2').should('have.text', "Thank you for your purchase!");
        cy.contains("OK").click()
    })
    it("Log out", function () {
        cy.get('#logout2').click()
    })
})

