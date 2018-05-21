$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreatAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up as an Investor.",
  "description": "",
  "id": "sign-up-as-an-investor.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4189708922,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create an investor account",
  "description": "",
  "id": "sign-up-as-an-investor.;create-an-investor-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to zopa home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Invest with Zopa button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Get Started button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the following account details",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "FirstSchool",
        "LastSchool",
        "Town",
        "Security",
        "FirstName",
        "LastName",
        "ContactNumber",
        "DOB",
        "HouseNumber",
        "PostCode"
      ],
      "line": 10
    },
    {
      "cells": [
        "test1@test11.com",
        "Password1",
        "first school",
        "last school",
        "Reading",
        "true",
        "John",
        "Peters",
        "07623781111",
        "20/10/1990",
        "15",
        "RG61EF"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.NavigateToZopaHomePage()"
});
formatter.result({
  "duration": 4729885529,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.ClickOnInvestWithZolaButton()"
});
formatter.result({
  "duration": 2073978817,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.ClickOnGetStartedButton()"
});
formatter.result({
  "duration": 799380367,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.ClickOnSignUpToGetStartedButton()"
});
formatter.result({
  "duration": 6566560512,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.enterTheFollowingAccountDetails(DataTable)"
});
formatter.result({
  "duration": 1213342822,
  "status": "passed"
});
formatter.write("Scenario passed");
formatter.after({
  "duration": 3242843100,
  "status": "passed"
});
});