Feature: Blazedemo app login scenario

    @nonoutline
    Scenario: As a User, I want to successfully login
        Given I am on the front page
        When I try to login correctly
        Then I am successfully login