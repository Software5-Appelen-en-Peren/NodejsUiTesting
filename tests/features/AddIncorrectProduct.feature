Feature: Add a incorrect product

Scenario Outline: User wants to add a incorrect product

Given User is connected with e-mail "<email>" and password "<password>" and logs in
When User goes to page addProduct and types in datefield "<date>" and productpricefield "<productPrice>" and warrantylengthfield "<warrantyLength>" and notefield "<note>" 
Then an error should be thrown

Examples:
    | email                             | password      | date | productPrice | warrantyLength | note  | 
    | a@hotmail.com                     | a@hotmail.com | 2019-02-02 | 50.00 | 2050-01-01 | this is a note|