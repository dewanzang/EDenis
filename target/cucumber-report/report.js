$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarDetailsCheck.feature");
formatter.feature({
  "line": 1,
  "name": "DVLA Cars Details Check",
  "description": "",
  "id": "dvla-cars-details-check",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car \u003cregno\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number \u003cregno\u003e search should return the correct make \u003cmake\u003e and colour \u003ccolour\u003e of the car",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;",
  "rows": [
    {
      "cells": [
        "regno",
        "make",
        "colour"
      ],
      "line": 12,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;1"
    },
    {
      "cells": [
        "LM14 SXN",
        "SEAT",
        "GREY"
      ],
      "line": 13,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;2"
    },
    {
      "cells": [
        "LD05 DSY",
        "SMART",
        "SILVER"
      ],
      "line": 14,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;3"
    },
    {
      "cells": [
        "FH54 FXC",
        "VAUXHALL",
        "SILVER"
      ],
      "line": 15,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;4"
    },
    {
      "cells": [
        "LB57 SXA",
        "FORD",
        "GREY"
      ],
      "line": 16,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;5"
    },
    {
      "cells": [
        "HT05 FUG",
        "PEUGEOT",
        "BLUE"
      ],
      "line": 17,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;6"
    },
    {
      "cells": [
        "NK04 FNX",
        "TRIUMPH",
        "RED"
      ],
      "line": 18,
      "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12603351396,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car LM14 SXN",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number LM14 SXN search should return the correct make SEAT and colour GREY of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 3219040949,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 2031770335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " LM14 SXN",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 272633692,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 835734533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM14 SXN",
      "offset": 28
    },
    {
      "val": "SEAT",
      "offset": 75
    },
    {
      "val": "GREY",
      "offset": 91
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 290677856,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 4267079227,
  "status": "passed"
});
formatter.before({
  "duration": 4387426380,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car LD05 DSY",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number LD05 DSY search should return the correct make SMART and colour SILVER of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 5496727997,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 3397641767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " LD05 DSY",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 262452719,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 991786033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LD05 DSY",
      "offset": 28
    },
    {
      "val": "SMART",
      "offset": 75
    },
    {
      "val": "SILVER",
      "offset": 92
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 285541183,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 1482376949,
  "status": "passed"
});
formatter.before({
  "duration": 2738806092,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car FH54 FXC",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number FH54 FXC search should return the correct make VAUXHALL and colour SILVER of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 2197135828,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 2002393854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " FH54 FXC",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 207419438,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 1061126893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FH54 FXC",
      "offset": 28
    },
    {
      "val": "VAUXHALL",
      "offset": 75
    },
    {
      "val": "SILVER",
      "offset": 95
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 212376194,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 1186772523,
  "status": "passed"
});
formatter.before({
  "duration": 5587024889,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car LB57 SXA",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number LB57 SXA search should return the correct make FORD and colour GREY of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 2949192339,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 1829506287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " LB57 SXA",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 169857365,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 605175917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LB57 SXA",
      "offset": 28
    },
    {
      "val": "FORD",
      "offset": 75
    },
    {
      "val": "GREY",
      "offset": 91
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 184778953,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 1134729597,
  "status": "passed"
});
formatter.before({
  "duration": 3143761037,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car HT05 FUG",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number HT05 FUG search should return the correct make PEUGEOT and colour BLUE of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 2641374127,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 2228606705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " HT05 FUG",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 214761596,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 646167268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HT05 FUG",
      "offset": 28
    },
    {
      "val": "PEUGEOT",
      "offset": 75
    },
    {
      "val": "BLUE",
      "offset": 94
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 242325631,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 1202709010,
  "status": "passed"
});
formatter.before({
  "duration": 2576124854,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check Registered Cars on DVLA website and verified that the make and colour of the car matches the excel file",
  "description": "",
  "id": "dvla-cars-details-check;check-registered-cars-on-dvla-website-and-verified-that-the-make-and-colour-of-the-car-matches-the-excel-file;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to get vehicle information from DVLA website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the start now button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the registration number of the car NK04 FNX",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the car registration number NK04 FNX search should return the correct make TRIUMPH and colour RED of the car",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.NavigateToGetVehicleInformationFromDVLAWebsite()"
});
formatter.result({
  "duration": 2229297390,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheStartButton()"
});
formatter.result({
  "duration": 1924269694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " NK04 FNX",
      "offset": 42
    }
  ],
  "location": "CarSearchSteps.EnterTheRegistrationNumberOfTheCar(String)"
});
formatter.result({
  "duration": 185517939,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.ClickOnTheContinueButton()"
});
formatter.result({
  "duration": 870169804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NK04 FNX",
      "offset": 28
    },
    {
      "val": "TRIUMPH",
      "offset": 75
    },
    {
      "val": "RED",
      "offset": 94
    }
  ],
  "location": "CarSearchSteps.CarSearchReturnCorrectMakeAndColour(String,String,String)"
});
formatter.result({
  "duration": 189279278,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 1074900156,
  "status": "passed"
});
});