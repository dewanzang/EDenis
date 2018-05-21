package com.zopa.testBase;

import cucumber.api.java.After;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.Properties;

/**
 * @author Denis E
 *
 * Test base class
 */

public class TestBase {
    public static WebDriver driver = null;
    public static String Browser;
    public static String mainURL;

    public static Properties prop = new Properties();
    public static InputStream input = null;

    //get config properties
    protected static String GetConfigProperties() throws MalformedURLException {
        try {
            input = new FileInputStream((System.getProperty("user.dir")+"\\config\\testconfig.properties"));

            // load a properties file
            prop.load(input);
            Browser = prop.getProperty("browser");
            mainURL = prop.getProperty("mainURL");
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return Browser;
    }

    @Before
    public static WebDriver startBrowser() throws MalformedURLException {
        String browserType = GetConfigProperties();
        if (driver == null) {
            if (browserType.equalsIgnoreCase("Chrome")) {
                System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\drivers\\chromedriver.exe");
                ChromeOptions options = new ChromeOptions();
                options.addArguments("disable-infobars");
                options.addArguments("--start-maximized");

                driver = new ChromeDriver(options);
            } else {
                System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\drivers\\IEDriverServer.exe");
                driver = new InternetExplorerDriver();
            }

        }
        return driver;
    }

    @After
    public static void closeBrowser(Scenario scenario){

        if (scenario.isFailed()) {
            scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
            scenario.write("Scenario failed");
        }else{
            scenario.write("Scenario passed");
        }

        driver.close();
        driver.quit();
        driver = null;
    }
}
