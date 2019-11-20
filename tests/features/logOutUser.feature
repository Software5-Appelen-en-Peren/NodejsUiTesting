Feature: log out a user

Scenario Outline: User wants to log out from the website

Given User with "<email>" and password "<password>" is on the login page
When the user press log out button 
Then the user is logged out

Examples:
    | email | password |
    | a@hotmail.com | a@hotmail.com |