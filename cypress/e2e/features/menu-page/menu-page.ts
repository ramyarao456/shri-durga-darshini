///   <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see page title on Menu screen",()=>{
    cy.title().should('eq','Shri Durga Darshini: Menu');
});

Then("I should check whether the explore button is enabled on menu screen",()=>{
    cy.get(".cta-btn").click();
});

Then("I should see Navigation Bar and links associated with menu page", () => {
    cy.get(".nav-item").eq(1).should("be.visible");
});

Then("I should see the footer and its content on menu screen",()=>{
    cy.get(".footer-content").should("be.visible");
});

Then("I should see all the headings present",()=>{
    cy.get(".global-headline").should("be.visible");
});

Then("I should see {string} images in breakfast in menu",(length: string) => {
    cy.get('[data-sr-id="0"]')
      .should("not.have.css", "display", "none")
      .within(() => {
       cy.get("img").should("have.length", length);
    });
});

Then("I should see {string} images in breakfast all day",(length: string) => {
    cy.get('[data-sr-id="4"]')
      .should("not.have.css", "display", "none")
      .within(() => {
       cy.get("img").should("have.length", length);
    });
});

Then("I should see {string} images in meals",(length: string)=>{
    cy.get('[data-sr-id="2"]')
      .should("not.have.css", "display", "none")
      .within(() => {
       cy.get("img").should("have.length", length);
    });
});

Then("I should see {string} images in sweets",(length: string)=>{
    cy.get('[data-sr-id="5"]')
      .should("not.have.css", "display", "none")
      .within(() => {
       cy.get("img").should("have.length", length);
    });
});

Then("I should see {string} images in beverages",(length: string)=>{
    cy.get('[data-sr-id="3"]')
      .should("not.have.css", "display", "none")
      .within(() => {
       cy.get("img").should("have.length", length);
    });
});