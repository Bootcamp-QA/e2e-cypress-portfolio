Feature: Visit Portfolio header section

    As recruiter, I want to see a header with the candidate name, title and links to Linkedin and Github, so I can know if fits with the position

Scenario: See header information
    Given the user visit portfolio webpage
    Then the user see name "Reyes Diaz" on header
    And the user see title contain "QA" on header
    And the user see github link "https://github.com/Bootcamp-QA/portfolioqa"
    And the user see linkedin link "https://www.linkedin.com/in/reyescuesta"

Scenario: Visit github link
    Given the user visit portfolio webpage
    When the user click on github link

Scenario: Visit linkedin link
    Given the user visit portfolio webpage
    When the user click on linkedin link




