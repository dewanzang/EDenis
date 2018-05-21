package com.zopa.Pages;

import org.openqa.selenium.JavascriptExecutor;
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
public class RatesPage {
    WebDriver driver;

    public RatesPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.XPATH, using = "//*[@id='resultMessage']//input[@value='Sign up to get started']")
    private WebElement btn_SignUp;

    @FindBy(how = How.XPATH, using = "//*[@id='resultMessage']  //label[.='I understand the risks involved.']")
    private WebElement chkBox_RiskInvolved;

    public SignUpPage clickOn_SignUp() {
        btn_SignUp.click();
        return new SignUpPage(driver);
    }

    public void check_RiskInvolved() throws InterruptedException {
        //scroll dowm page
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(0,1500)");

        chkBox_RiskInvolved.click();
    }
}
