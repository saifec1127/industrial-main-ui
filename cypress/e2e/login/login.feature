Feature: User tab

  Scenario: User should see users on dashboard
    Given user is on login page
    When user enters valid credentials
    Then user should see dashboard page
    And user should see user tab
    And user should see users list