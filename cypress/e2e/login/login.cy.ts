import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user is on login page", () => {
  cy.intercept("POST", "**/graphql", {
    statusCode: 200,
    body: {
      data: {
        users: {
          success: true,
          message: "Users fetched successfully",
          data: [
            {
              id: "1",
              name: "Saif",
              role: "Senior Software Engineer",
              createdAt: "2026-07-04T07:43:07.376Z",
              updatedAt: "2026-07-04T07:43:07.376Z",
            },
            {
              id: "2",
              name: "Hiba",
              role: "Todler",
              createdAt: "2026-07-04T17:00:29.959Z",
              updatedAt: "2026-07-04T17:00:29.959Z",
            },
          ],
        },
      },
    },
  }).as("getUsers");

  cy.visit("/");
});

When("user enters valid credentials", () => {
  cy.get("[data-testid='email-input']").type("saif@example.com");
  cy.get("[data-testid='password-input']").type("password123");
  cy.get("[data-testid='login-button']").click();
});

Then("user should see dashboard page", () => {
  cy.url().should("include", "/dashboard");
  cy.contains("Dashboard Page").should("be.visible");
});

Then("user should see user tab", () => {
  cy.contains("User Tab").should("be.visible");
});

Then("user should see users list", () => {
  cy.wait("@getUsers");
  cy.get("[data-testid='users-list']").should("be.visible");
  cy.contains("Saif").should("be.visible");
  cy.contains("Senior Software Engineer").should("be.visible");
  cy.contains("Hiba").should("be.visible");
  cy.contains("Todler").should("be.visible");
});