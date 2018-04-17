package com.dvla.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * @author Denis E
 *
 * Car Search Page Object
 */

public class CarSearchPage {

    private static By startBtn = By.xpath("//*[@class='pub-c-button pub-c-button--start']");
    private static By regNo = By.xpath("//*[@id='Vrm']");
    private static By continueBtn = By.xpath("//*[contains(text(),'Continue')]");

    public void clickStart(WebDriver driver) {
       driver.findElement(startBtn).click();
    }

    public void enterCarRegistrationNo(String regno, WebDriver driver) {
        driver.findElement(regNo).sendKeys(regno.trim());
    }

    public void clickContinue(WebDriver driver) {
        driver.findElement(continueBtn).click();
    }

}
