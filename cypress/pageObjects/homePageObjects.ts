/// <reference types="cypress" />


class HomePage {

    visit(): void {

        const base = Cypress.config('baseUrl') || 'https://rahulshettyacademy.com/seleniumPractise/#/';
        cy.visit(base);
    }


    searchFor(item: string): void {
        cy.get('input.search-keyword').clear().type(item);
        cy.wait(2000);
    }

    filterProducts(searchTerm: string): void {
        this.searchFor(searchTerm);
    }

    verifyItemVisible(): void {
        cy.get('.products').should('be.visible');
        cy.get('.products').find('.product:visible').should('have.length', 4);
    }
    assertFilteredProductCount(expectedCount: number): void {
        cy.get('.products').find('.product:visible').should('have.length', expectedCount);
    }


    assertFirstFilteredProductContains(name: string): void {
        cy.get('.products')
            .find('.product:visible')
            .first()
            .find('h4.product-name')
            .should('contain.text', name);
    }

    addToCart(itemName: string): void {
        cy.get('.products .product').each(($el) => {
            const productName = $el.find('h4.product-name').text();
            if (productName.includes(itemName)) {
                cy.wrap($el).find('button').click();
            }
        });
    }

    incrementQuantityOfFirstProduct(): void {
        cy.get('.products .product').first().as('firstProduct');
        cy.get('@firstProduct').find('input.quantity').should('have.value', '1');
        cy.get('@firstProduct').find('a.increment').click();
        cy.get('@firstProduct').find('input.quantity').should('have.value', '2');
    }
}

export default HomePage;