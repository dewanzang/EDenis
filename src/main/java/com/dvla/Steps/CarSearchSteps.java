package com.dvla.Steps;

import com.dvla.Pages.CarSearchPage;
import com.dvla.Pages.CarSearchResultsPage;
import com.dvla.testBase.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

/**
 * @author Denis E
 *
 * DVLA car search steps definination
 */

public class CarSearchSteps {

    public static WebDriver driver;
    private String regno;

    //Create an object of CarSearchPage
    CarSearchPage carSearchPageObj = new CarSearchPage();

    //Create an object carSearchResultsPage
    CarSearchResultsPage carSearchResultsPageObj = new CarSearchResultsPage();

    @Given("^I navigate to get vehicle information from DVLA website$")
    public void NavigateToGetVehicleInformationFromDVLAWebsite() throws Throwable {
        driver = TestBase.startBrowser();
        System.out.println("I navigate to get vehicle information from DVLA website");
        driver.navigate().to("http://www.gov.uk/get-vehicle-information-from-dvla");
    }

    @When("^I click on the start now button$")
    public void ClickOnTheStartButton() throws Throwable {
        System.out.println("I click on the start now button");
        carSearchPageObj.clickStart(driver);
    }

    @When("^I enter the registration number of the car(.*)$")
    public void EnterTheRegistrationNumberOfTheCar(String regno) throws Throwable {
        System.out.println("I enter the registration number of the car");
        carSearchPageObj.enterCarRegistrationNo(regno, driver);
    }

    @When("^I click on the continue button$")
    public void ClickOnTheContinueButton() throws Throwable {
        System.out.println("I click on the continue button");
        carSearchPageObj.clickContinue(driver);
    }

    @Then("^the car registration number (.*) search should return the correct make (.*) and colour (.*) of the car$")
    public void CarSearchReturnCorrectMakeAndColour(String regno,String make,String colour) throws Throwable {
        System.out.println("the car registration number search should return the correct make and colour of the car");
        carSearchResultsPageObj.verifyCarDetails(regno,make,colour,driver);
    }
}
