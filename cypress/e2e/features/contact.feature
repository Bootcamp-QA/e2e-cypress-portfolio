Feature: Contact
    As a recruiter, I want to contact the candidate, so that I can interview them

Background:
    Given the user visit portfolio webpage

Scenario: Send the form with mandatory fields
    When the user fill email with "reyes@gmail.com"
    And the user select subject "Information"
    And the user fill message with "test message"
    And the user check accept privacy policy
    And the user press submit button
    Then the user should not see portfolio url

  
Scenario Outline: Send the form with invalid data
    When the user fill email with <email>
    And the user select subject <subject>
    And the user fill message with <message>
    And the user check accept privacy policy
    And the user press submit button
    Then the user should see portfolio url

    Examples:

    | email             |  subject       | message | 
    | " "               |  "Information" | "test"  | 
    | "reyes"           |  "Information" | "test"  | 
    | "reyes@gmail.com" |  "---"         | "test"  |

