
Feature: Test Sample Feature

  Scenario: Verify Login Functionality
    Given I am on the login page
    When I enter username "testuser" and password "password"
    And I click on the login button
    Then I should be logged in successfully



    