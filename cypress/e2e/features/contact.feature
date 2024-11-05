Feature: Contact
    As a recruiter, I want to contact the candidate, so that I can interview them

Scenario: Fill the form with mandatory fields
    Given the user visit portfolio webpage
    When the user fill email with "reyes@gmail.com"
    And the user select subject "Informacion"
    And the user fill message with "test message"
    And the user check accept privacy policy
    And the user press submit button