@outlineAll
Feature: Blazedemo app login scenario

    @outline
    Scenario Outline: As a User, I want to successfully login
        Given I am on the front page
        When I try to login with "<username>" and "<password>"
        Then I am successfully login with "<username>"

        Examples:
            | username          | password  |      
            | wibowo.bullseye   | bullseye  |
            | hendri            | hendri123 |


    Scenario: As a user I want to successfully logged in
        Given I am on the front page
        When I try to login correctly
        Then I am successfully login