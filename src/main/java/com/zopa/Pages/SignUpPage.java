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
public class SignUpPage {
    WebDriver driver;

    public SignUpPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "member_email")
    private WebElement inpt_Email;

    @FindBy(how = How.ID, using = "member_password")
    private WebElement inpt_Password;

    @FindBy(how = How.ID, using = "member_first_school")
    private WebElement inpt_FirstSchool;

    @FindBy(how = How.ID, using = "member_last_school")
    private WebElement inpt_LastSchool;

    @FindBy(how = How.ID, using = "member_town_of_birth")
    private WebElement inpt_Town;

    @FindBy(how = How.XPATH, using = "//*[@id='new_member']//label[.='Show security answers']")
    private WebElement chk_Security;

    @FindBy(how = How.ID, using = "member_lenders_lender_application_first_name")
    private WebElement inpt_FirstName;

    @FindBy(how = How.ID, using = "member_lenders_lender_application_last_name")
    private WebElement inpt_LastName;

    @FindBy(how = How.ID, using = "member_lenders_lender_application_home_phone")
    private WebElement inpt_ContactNumber;

    @FindBy(how = How.ID, using = "date_of_birth_day")
    private WebElement inpt_DOB_Day;

    @FindBy(how = How.ID, using = "date_of_birth_month")
    private WebElement inpt_DOB_Month;

    @FindBy(how = How.ID, using = "date_of_birth_year")
    private WebElement inpt_DOB_Year;

    @FindBy(how = How.ID, using = "house_number")
    private WebElement inpt_HouseNumber;

    @FindBy(how = How.ID, using = "postcode")
    private WebElement inpt_postCode;

    @FindBy(how = How.XPATH, using = "//*[@id='agreements']//label[@for='member_accept_principles']")
    private WebElement chk_declaration;

    @FindBy(how = How.XPATH, using = "//*[@id='new_member']//button[.='Create account']")
    private WebElement btn_createAccount;

    public void enterEmail(String email) {
        inpt_Email.sendKeys(email);
    }

    public void enterPassword(String password) {
        inpt_Password.sendKeys(password);
    }

    public void enterFirstSchool(String firstSchool) {
        inpt_LastSchool.sendKeys(firstSchool);
    }

    public void enterLastSchool(String lastSchool) {
        inpt_LastSchool.sendKeys(lastSchool);
    }

    public void enterTown(String town) {
        inpt_Town.sendKeys(town);
    }

    public void checkSecurity(Boolean security) {
        if (security)
            chk_Security.click();
    }

    public void enterFirstName(String firstName) {
        inpt_FirstName.sendKeys(firstName);
    }

    public void enterLastName(String lastName) {
        inpt_LastName.sendKeys(lastName);
    }

    public void enterContactNumber(String contactNumber) {
        inpt_ContactNumber.sendKeys(contactNumber);
    }

    public void enterDOBDay(String dobDay) {
        inpt_DOB_Day.sendKeys(dobDay);
    }

    public void enterDOBMonth(String dobMonth) {
        inpt_DOB_Month.sendKeys(dobMonth);
    }

    public void enterDOBYear(String dobYear) {
        inpt_DOB_Year.sendKeys(dobYear);
    }

    public void enterHouseNumber(String houseNumber) {
        inpt_HouseNumber.sendKeys(houseNumber);
    }

    public void enterPostCode(String postCode) {
        inpt_postCode.sendKeys(postCode);
    }

    public void checkDeclaration() {
        chk_declaration.click();
    }

    public void buttnCreateAccount() {
        btn_createAccount.click();
    }
}
