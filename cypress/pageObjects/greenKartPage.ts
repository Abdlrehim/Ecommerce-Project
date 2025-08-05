/// <reference types="cypress" />

class GreenKart {
    gotoCart(): void {
        cy.get('.cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    }


    openCart(): void {
        cy.get('.cart-icon').click();
    }


    proceedToCheckout(): void {
        cy.contains('PROCEED TO CHECKOUT').click();
    }


    clickPlaceOrder(): void {
        cy.contains('Place Order').click();
    }


    verifyCheckoutDisabledWhenEmpty(): void {
        this.openCart();
        cy.contains('PROCEED TO CHECKOUT').should('have.class', 'disabled');
    }

    applyPromoCode(code: string): void {
        cy.get('input[placeholder="Enter promo code"]').clear().type(code);
        cy.contains('Apply').click();
    }


    verifyPromoApplied(): void {

        cy.contains(/code applied/i).should('be.visible');
        cy.contains('Discount :')
            .parent()
            .invoke('text')
            .then((text) => {
                // Extract the last numeric percentage from the text; default
                // to '0%' when not found.
                const match = text.match(/(\d+)%/);
                const perc = match ? match[1] : '0';
                // Assert that the discount is greater than zero
                expect(parseInt(perc)).to.be.greaterThan(0);
            });
    }


    clickProceed(): void {
        cy.contains('button', 'Proceed').click();
    }


    verifyTermsWarningVisible(): void {
        cy.contains(/please accept terms/i).should('be.visible');
    }


    selectCountry(country: string): void {
        cy.get('select').select(country);
    }


    agreeToTerms(): void {
        cy.contains('Terms & Conditions').prev('input[type="checkbox"]').check();
    }


    verifyProceedButtonDisabled(): void {

        cy.contains('button', 'Proceed', { timeout: 10000 })
            .should('be.visible')
            .then(($btn) => {
                const isDisabledAttr = $btn.is(':disabled') || $btn.attr('disabled') !== undefined;
                const hasDisabledClass = $btn.hasClass('disabled');
                expect(isDisabledAttr || hasDisabledClass).to.be.true;
            });
    }


    verifyProceedButtonEnabled(): void {

        cy.contains('button', 'Proceed', { timeout: 10000 })
            .should('be.visible')
            .then(($btn) => {
                const isDisabledAttr = $btn.is(':disabled') || $btn.attr('disabled') !== undefined;
                const hasDisabledClass = $btn.hasClass('disabled');
                expect(isDisabledAttr || hasDisabledClass).to.be.false;
            });
    }
}

export default GreenKart;