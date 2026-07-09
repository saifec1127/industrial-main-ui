import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user is on login page", () => {
  cy.visit("/");
});

When("user enters valid credentials", () => {
  cy.get("[data-testid='email-input']").type("saif@example.com");
  cy.get("[data-testid='password-input']").type("password123");
  cy.get("[data-testid='login-button']").click();
});

Then("user should see dashboard page", () => {
  cy.url().should("include", "/dashboard");
});