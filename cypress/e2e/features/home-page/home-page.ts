///   <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see page title visible on Home screen",()=>{
    cy.title().should('eq','Shri Durga Darshini');
});

Then("I should see Navigation Bar and links associated with it",()=>{
    cy.get(".nav-item").eq(0).should("be.visible");
});

Then("I should see hero section visible on Home screen",()=>{
    cy.get(".hero").should("be.visible");
});

Then("I should see the footer and its content on Home screen",()=>{
    cy.get(".footer-content").should("be.visible");
});

Then("I should check whether the explore button is enabled on Home screen",()=>{
    cy.get(".cta-btn").click();
});

Then("I should check if About,Menu and Contact link is enabled in Home Page",()=>{
    cy.get(".body-btn").eq(0).click();
    cy.visit("/index.html");
    cy.get(".btn").eq(2).click();
    cy.visit("/index.html");
    cy.get(".btn").eq(3).click();
});

Then("I should see {string} images on Home screen",(length:string)=>{
    cy.get(".discover-our-menu img").should("have.length",length); 
});

Then("I should see {string} images of Party order on Home screen",(length:string)=>{
    cy.get(".culinary-delight img").should("have.length",length);
});


