package com.zopa.Steps;

import com.zopa.Pages.*;
import com.zopa.testBase.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import java.util.List;
import java.util.Map;

/**
 * @author Denis E
 *
 * Zopa create account steps definination
 */

public class CreateAccountSteps {

    WebDriver driver;

    //Declare Page Objects
    HomePage homePageObj = null;
    LendingPage lendingPageObj = null;
    RatesPage RatesPageObj = null;
    SignUpPage SignUpPageObj = null;

    @Given("^I navigate to zopa home page$")
    public void NavigateToZopaHomePage() throws Throwable {
        driver = TestBase.startBrowser();
        System.out.println("I navigate to Zopa home page");
        homePageObj = new HomePage(driver);
        homePageObj.navigateTo_HomePage();
    }

    @When("^I click on Invest with Zopa button$")
    public void ClickOnInvestWithZolaButton() throws Throwable {
        System.out.println("I click on the Invest with Zopa button");
        lendingPageObj = homePageObj.clickOn_InvestWithZopa();
    }

    @When("^I click on Get Started button$")
    public void ClickOnGetStartedButton() throws Throwable {
        System.out.println("I click on the Get Started button");
        RatesPageObj = lendingPageObj.clickOn_GetStarted();
    }

    @When("^I click on Sign up button")
    public void ClickOnSignUpToGetStartedButton() throws Throwable {
        System.out.println("I click on Sign up to get started button");
        RatesPageObj.check_RiskInvolved();
        SignUpPageObj = RatesPageObj.clickOn_SignUp();
    }

    @Then("^I enter the following account details$")
    public void enterTheFollowingAccountDetails(DataTable accountDetails) throws Throwable {
        System.out.println("I enter the following account details ");
        List<Map<String, String>> content = accountDetails.asMaps(String.class,String.class);
        for (Map<String, String> row : content) {
            String email = row.get("Email");
            SignUpPageObj.enterEmail(email);

            String password = row.get("Password");
            SignUpPageObj.enterPassword(password);

            String firstSchool = row.get("FirstSchool");
            SignUpPageObj.enterFirstSchool(firstSchool);

            String lastSchool = row.get("LastSchool");
            SignUpPageObj.enterLastSchool(lastSchool);

            String town = row.get("Town");
            SignUpPageObj.enterTown(town);

            String security = row.get("Security");
            SignUpPageObj.checkSecurity(Boolean.parseBoolean(security));

            String firstName = row.get("FirstName");
            SignUpPageObj.enterFirstName(firstName);

            String lastName = row.get("LastName");
            SignUpPageObj.enterLastName(lastName);

            String contactNumber = row.get("ContactNumber");
            SignUpPageObj.enterContactNumber(contactNumber);

            String DOB = row.get("DOB");
            String[] DOBArray = DOB.split("/");
            SignUpPageObj.enterDOBDay(DOBArray[0]);
            SignUpPageObj.enterDOBMonth(DOBArray[1]);
            SignUpPageObj.enterDOBYear(DOBArray[2]);

            String houseNumber = row.get("HouseNumber");
            SignUpPageObj.enterHouseNumber(houseNumber);

            String postCode = row.get("PostCode");
            SignUpPageObj.enterPostCode(postCode);

            //Click this will create the account
            //SignUpPageObj.buttnCreateAccount();
        }
    }

}
