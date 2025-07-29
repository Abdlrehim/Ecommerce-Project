import { defineConfig } from "cypress";
///<reference types="cypress" />

import HomePage from "../pageObjects/homePageObjects.ts";
import GreenKart from "../pageObjects/greenKartPage.ts";


describe('E-commerce Homepage Tests', () => {
    it('should search and add an item to the cart and place order', () => {

        const homepage = new HomePage()
        const greencart = new GreenKart()
        homepage.visit();
        homepage.searchFor('ca');
        homepage.verifyItemVisible();
        homepage.addToCart('Cashews');
        greencart.gotocart();

    });
});









