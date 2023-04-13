///   <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see page title on About screen",()=>{
    cy.title().should('eq','Shri Durga Darshini: About');
});

Then("I should see Navigation Bar and links associated with About page", () => {
    cy.get(".nav-item").eq(4).should("be.visible");
});

Then("I should see hero section visible on About screen",()=>{
    cy.get(".hero").should("be.visible");
});

Then("I should check whether the Other stores button is enabled",()=>{
    cy.get(".cta-btn").click();
});

Then("I should see the footer and its content on About screen",()=>{
    cy.get(".footer-content").should("be.visible");
});