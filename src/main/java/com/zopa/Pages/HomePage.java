package com.zopa.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static com.zopa.testBase.TestBase.mainURL;

/**
 * @author Denis E
 *
 * Zopa home page
 */
public class HomePage {
    WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.LINK_TEXT, using = "Invest with Zopa")
    private WebElement btn_InvestWithZopa;

    public LendingPage clickOn_InvestWithZopa() {
        btn_InvestWithZopa.click();
        return new LendingPage(driver);
    }

    public void navigateTo_HomePage() {
        driver.get(mainURL);
    }
}
