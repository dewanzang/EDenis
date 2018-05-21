package com.zopa.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * @author Denis E
 *
 * Zopa Lending page
 */
public class LendingPage {
    WebDriver driver;

    public LendingPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.LINK_TEXT, using = "Get started")
    private WebElement btn_GetStarted;

    public RatesPage clickOn_GetStarted() {
        btn_GetStarted.click();
        return new RatesPage(driver);
    }
}
