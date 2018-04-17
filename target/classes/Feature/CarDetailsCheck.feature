Feature: DVLA Cars Details Check

  @TestRun
  Scenario Outline: Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file
    Given I navigate to get vehicle information from DVLA website
    When I click on the start now button
    And I enter the registration number of the car <regno>
    And I click on the continue button
    Then the car registration number <regno> search should return the correct make <make> and colour <colour> of the car

    Examples:
      |regno      |make     |colour |
      |LM14 SXN   |SEAT     |GREY   |
      |LD05 DSY   |SMART    |SILVER |
      |FH54 FXC   |VAUXHALL |SILVER |
      |LB57 SXA   |FORD     |GREY   |
      |HT05 FUG   |PEUGEOT  |BLUE   |
      |NK04 FNX   |TRIUMPH  |RED    |

