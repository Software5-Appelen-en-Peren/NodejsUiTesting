Feature: Add a product

Scenario Outline: User wants to add a product

Given User is connected with email "<email>" and password "<password>" and logs in
When User goes to page addProduct and types in datefield "<date>" and productnamefield "<productName>" and productpricefield "<productPrice>" and warrantylengthfield "<warrantyLength>" and storefield "<store>" and notefield "<note>" 
Then product should be successfully created

Examples:
    | email                             | password      | date | productName | productPrice | warrantyLength | store | note  | 
    | a@hotmail.com                     | a@hotmail.com | 2019-02-02 | TestProduct | 50.00 | 2050-01-01 | Apple | this is a note|