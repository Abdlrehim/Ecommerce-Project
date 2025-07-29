/// <reference types="cypress" />

class GreenKart {

    gotocart(): void {

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();



    }
}

export default GreenKart;





