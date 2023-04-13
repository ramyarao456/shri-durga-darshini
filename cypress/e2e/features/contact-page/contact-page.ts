///   <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see page title on Contact screen",()=>{
    cy.title().should('eq','Shri Durga Darshini: Contact');
});

Then("I should see Navigation Bar and links associated with contact page", () => {
    cy.get(".nav-item").eq(3).should("be.visible")
});

Then("I should see hero section visible on Contact screen",()=>{
    cy.get(".hero").should("be.visible");
});

Then("I should check whether Get the Quote button is enabled",()=>{
    cy.get(".cta-btn").eq(0).click();
});

Then("I should see the footer and its content on Contact screen",()=>{
    cy.get(".footer-content").should("be.visible");
});

Then("I should fill the Form", (dataTable: any) => {
    cy.get("#name").type(dataTable.rawTable[1][0]);
    cy.get("#number").type(dataTable.rawTable[1][1]);
    cy.get("#email").type(dataTable.rawTable[3][0]);
    cy.get("#address").type(dataTable.rawTable[3][1]);
    cy.get("#reason").type(dataTable.rawTable[5][0]);
    cy.get("#date").type(dataTable.rawTable[5][1]);
    cy.get("#items").type(dataTable.rawTable[5][1]);
  });

Then("I should verify the alert message once the form is submitted",()=>{
    cy.get(".cta-btn").eq(1).click();
});

