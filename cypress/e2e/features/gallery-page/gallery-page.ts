///   <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see page title on Gallery screen",()=>{
    cy.title().should('eq','Shri Durga Darshini: Gallery');
});

Then("I should see Navigation Bar and links associated with Gallery page", () => {
    cy.get(".nav-item").eq(2).should("be.visible");
});

Then("I should see hero section visible on Gallery screen",()=>{
    cy.get(".hero").should("be.visible");
});

Then("I should check whether the explore button is enabled on Gallery screen",()=>{
    cy.get(".cta-btn").click();
});

Then("I should see the footer and its content on Gallery screen",()=>{
    cy.get(".footer-content").should("be.visible");
});