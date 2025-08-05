/// <reference types="cypress" />

import HomePage from "../pageObjects/homePageObjects.ts";
import GreenKart from "../pageObjects/greenKartPage.ts";

describe('GreenKart Cart & Checkout Tests', () => {
    let homepage: HomePage;
    let cart: GreenKart;

    beforeEach(() => {
        homepage = new HomePage();
        cart = new GreenKart();
        homepage.visit();
    });

    it('does not allow checkout when the cart is empty', () => {

        cart.verifyCheckoutDisabledWhenEmpty();
    });

    it('applies a promo code and updates the discount', () => {

        homepage.addToCart('Carrot');
        homepage.addToCart('Cucumber');


        cart.openCart();
        cart.proceedToCheckout();


        cart.applyPromoCode('rahulshettyacademy');
        cart.verifyPromoApplied();
    });

    it('requires a country and terms agreement before finishing the order', () => {

        homepage.addToCart('Carrot');
        cart.openCart();
        cart.proceedToCheckout();
        cart.clickPlaceOrder();


        cart.clickProceed();
        cart.verifyTermsWarningVisible();


        cart.selectCountry('India');
        cart.clickProceed();
        cart.verifyTermsWarningVisible();

        cart.agreeToTerms();
        cart.verifyProceedButtonEnabled();
    });
});