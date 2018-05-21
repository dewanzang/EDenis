Feature: Sign up as an Investor.

  @TestRun
  Scenario: Create an investor account
    Given I navigate to zopa home page
    When I click on Invest with Zopa button
    And I click on Get Started button
    And I click on Sign up button
    And I enter the following account details
    |Email           |Password  |FirstSchool  |LastSchool  |Town   |Security|FirstName|LastName|ContactNumber|DOB       |HouseNumber|PostCode|
    |test1@test11.com|Password1 |first school |last school |Reading|true    |John     |Peters  |07623781111  |20/10/1990|15         |RG61EF  |


