package com.zopa.testBase;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * @author Denis E
 *Cucumber Runner class
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\main\\resources\\Feature",
        tags = {"@TestRun"},
        glue = "com.zopa",
        plugin = {"pretty","html:target/cucumber-report/", "json:target/cucumber.json"})

public class CucumberTestRunner {

}
