/// <reference types="cypress" />

import HomePage from "../pageObjects/homePageObjects.ts";
import GreenKart from "../pageObjects/greenKartPage.ts";

describe('E‑commerce HomePage Tests', () => {
    let homepage: HomePage;
    let greencart: GreenKart;

    beforeEach(() => {
        homepage = new HomePage();
        greencart = new GreenKart();
        homepage.visit();
    });

    it('should search and add an item to the cart and place order', () => {
        homepage.searchFor('ca');
        homepage.verifyItemVisible();
        homepage.addToCart('Cashews');
        greencart.gotoCart();
    });

    it('filters products based on a search term', () => {

        homepage.filterProducts('tom');
        homepage.assertFilteredProductCount(1);
        homepage.assertFirstFilteredProductContains('Tomato');
    });

    it('increments quantity of the first product when the plus button is clicked', () => {

        homepage.incrementQuantityOfFirstProduct();
    });
});