import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

//        format = {"pretty","html:target, test-report,report-html" +
//                              "json:target,test-report,report-json.json"},
        features = {"src/test/resources/"},
        glue = {"intradeUtils/stepDeffs"},
        dryRun = false,
        monochrome = true,
        plugin = {"pretty","junit:target/Allure-Results/AllureReporter",
                  },

        strict = false,
        snippets = SnippetType.CAMELCASE,

        tags = {"@SmokeTest001"}


)



public class RunnerCukesTest {




}
