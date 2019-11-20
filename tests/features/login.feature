Feature: User logs in 

Scenario Outline: User wants to login in the app 

Given User is on the login page and types in "<email>" in email textbox and "<password>" in password text box  
When User presses login button 
Then User should be send to members page

Examples:
    | email                             | password      |
    | a@hotmail.com                     | a@hotmail.com |