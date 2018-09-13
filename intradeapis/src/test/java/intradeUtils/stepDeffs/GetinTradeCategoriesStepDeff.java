package intradeUtils.stepDeffs;

import codeUtil.EnviUriConfig;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

import java.net.URI;

import static io.restassured.RestAssured.authentication;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;

public class GetinTradeCategoriesStepDeff {

    private URI uri;
    private RequestSpecification requestSpec;
    private Response response;

    @Given("^I have setup an EndPoint for the categories$")
    public void i_have_setup_an_EndPoint_for_the_categories() throws Throwable {

        String urlfromconfig = EnviUriConfig.getHostedEnnValue();
        System.out.println(urlfromconfig);

        String endPointCategories = urlfromconfig+"/categories";
        uri = new URI(endPointCategories);

        requestSpec =

                given()

                        .accept(ContentType.ANY);
        requestSpec.headers("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qZENSa0V4TkRRMFJUZzFRVUk1T1RsRE9UUkNOa05GTURJMU9EQkVRa1JGTnpNNE56QkdRdyJ9.eyJodHRwOi8vaW50cmFkZS9yb2xlcyI6WyJ3YXJlaG91c2VPcCJdLCJodHRwOi8vaW50cmFkZS9kZXBhcnRtZW50SWQiOjEsImlzcyI6Imh0dHBzOi8vaW50cmFkZS1xYS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWI4ZTU4YzJkMDlhNmIxMTFiNTAyNGQxIiwiYXVkIjpbImh0dHBzOi8vaW50cmFkZS8iLCJodHRwczovL2ludHJhZGUtcWEuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUzNjY2MzUwOCwiZXhwIjoxNTM2NjcwNzA4LCJhenAiOiI3bVdFcE0wRXdPZkpsM3JRemxjNUF6ckhpWjJnNlgxcSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.lePOHjZvryD3ZOSYto3kVBSsHtKUpeGg91DixKhaeJxBq8bEEdZKVyJ0lIOhdWuG7jLFl4xerAzX3uZrS33yLqsKM5HJyiXbt_2N27b6P_xdfRigYrLTyyieuSlmKihdS3OtyE1l6qK_syxsxxI7IUTnYYH4-jW4Xov21zmKkzqIpfBOJvG64puHT3cBXntceYNWEcvoJJ2iMILlPCTCe5U3TS5CrSSvtKbngu_YPKIca0GiTh3IlTYBb-M-css2s9KOKEv9oPJZZvEx1zaAME5nicAaNdHSoPjIgK_0Bp7Ej8ikn4lUcHnFaG0rfUWY033WiAKFN5BcOSjk4STdWw")
                        .contentType("application/json");


    }

    @When("^I perform a GET operation$")
    public void i_perform_a_GET_operation() throws Throwable {

        response = requestSpec
                .when()
                .get(uri);


    }

    @Then("^I should see all the list of available categories and valid response code\\.$")
    public void i_should_see_all_the_list_of_available_categories_and_valid_response_code() throws Throwable {

        response
                .then()
                .log().all()
                .and();

        String contentType = response.header("Content-Type");
        System.out.println("Content-Type value: " + contentType);
        // Header named Server
        String serverType =  response.header("Server");
        System.out.println("Date");

        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, 200);
        System.out.println(statusCode);


    }

}
