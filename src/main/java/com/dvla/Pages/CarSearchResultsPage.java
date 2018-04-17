package com.dvla.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;

/**
 * @author Denis E
 *
 * Car details search result page
 */

public class CarSearchResultsPage {

    private static By actualRegNo = By.xpath("//*[@id='pr3']/div/ul/li[1]/span[2]");
    private static By actualMake = By.xpath("//*[@id='pr3']/div/ul/li[2]/span[2]/strong");
    private static By actualColour = By.xpath("//*[@id='pr3']/div/ul/li[3]/span[2]/strong");

    public void verifyCarDetails(String registrationNo,String make,String colour, WebDriver driver) {
        //Verify car registration no is displayed as expected
        assertEquals("Verify Registration No", registrationNo.trim(), driver.findElement(actualRegNo).getText().trim());

        //Verify car make is displayed as expected
        assertEquals("Verify make", make.trim(), driver.findElement(actualMake).getText().trim());

        //Verify car colour is displayed as expected
        assertEquals("Verify colour", colour.trim(), driver.findElement(actualColour).getText().trim());
    }

}
