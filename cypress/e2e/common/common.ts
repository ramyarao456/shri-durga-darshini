///   <reference types="cypress" />
import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { activeLink, link } from "../../support/pageObjects/commonObjects";

When("I visit the Home Page",()=>{
    cy.visit("/index.html");
});

When("I visit the Menu Page",()=>{
    cy.visit("/resources/pages/menu.html");
    cy.url().should("contain","/resources/pages/menu.html");
});

When("I visit the Contact Page",()=>{
    cy.visit("/resources/pages/contact.html");
    cy.url().should("contain","/resources/pages/contact.html");
});

When("I visit the Gallery Page",()=>{
    cy.visit("/resources/pages/gallery.html");
    cy.url().should("contain","/resources/pages/gallery.html");
});

When("I visit the About Page",()=>{
    cy.visit("/resources/pages/about.html");
    cy.url().should("contain","/resources/pages/about.html");
});

Then("I should see {string} link should be active", (navLink: string) => {
activeLink(navLink);
    cy.get(".nav-link").eq(link).should("have.class", "active");
});

Then("I should check whether the explore button is enabled",()=>{
    cy.get(".cta-btn").click();
});

Then("I should check whether the back to top feature is enabled",()=>{
    cy.get(".back-to-top").should("be.be.visible").click();
    cy.get(".sr").should("be.visible");
});

Then("I should check if navigation is enabled from Home page to every other screen",()=>{
    cy.get(".nav-list").within(()=>{
      cy.get(".nav-item").eq(0).click();
      cy.get(".nav-item").eq(1).click();
      cy.get(".nav-item").eq(2).click();
      cy.get(".nav-item").eq(3).click();
      cy.get(".nav-item").eq(4).click();
    });
});

