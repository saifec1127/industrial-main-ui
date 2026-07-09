Feature: Login

  Scenario: User should login successfully
    Given user is on login page
    When user enters valid credentials
    Then user should see dashboard page