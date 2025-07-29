/// <reference types="cypress" />

// cypress/pageObjects/HomePage.ts

class HomePage {
    visit(): void {
        cy.visit('/');
    }
    // search with ca
    searchFor(item: string): void {
        cy.get('.search-keyword').clear().type(item);
        cy.wait(2000);
    }

    verifyItemVisible(): void {
        cy.get('.products').should('be.visible');
        cy.get('.products').find('.product').should('have.length', 4);
    }
    // add cashwes to cart 
    addToCart(itemName: string): void {
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const name = $el.find('h4.product-name').text()
            if (name.includes(itemName)) {

                cy.wrap($el).find('button').click();

            }

        })
    }
}

export default HomePage;
