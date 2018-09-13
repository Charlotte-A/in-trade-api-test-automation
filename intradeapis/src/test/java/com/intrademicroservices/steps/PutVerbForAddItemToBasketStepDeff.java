//package com.intrademicroservices.steps;
//
//import codeUtil.EnviUriConfig;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.restassured.http.ContentType;
//import io.restassured.specification.RequestSpecification;
//
//import java.net.URI;
//
//import static io.restassured.RestAssured.given;
//
//public class PutVerbForAddItemToBasketStepDeff {
//
//    private URI uri;
//    private RequestSpecification requestSpec;
//
//    @Given("^An EndPoint for Products service is set up$")
//    public void an_EndPoint_for_Products_service_is_set_up() throws Throwable {
//
//        String urlfromconfig = EnviUriConfig.getHostedEnnValue();
//        System.out.println(urlfromconfig);
//
//        String endPointAddItem = urlfromconfig+"/basket";
//        uri = new URI(endPointAddItem);
//
//        requestSpec =
//
//                given()
//                        .accept(ContentType.ANY)
//                        .contentType("application/json");
//
//
//    }
//
//    @When("^I perform a PUT call to Product EndPoint$")
//    public void i_perform_a_PUT_call_to_Product_EndPoint() throws Throwable {
//
//    }
//
//    @Then("^I should be able to update an item in a basket and assert both returned data and http response code\\.$")
//    public void i_should_be_able_to_update_an_item_in_a_basket_and_assert_both_returned_data_and_http_response_code() throws Throwable {
//
//    }
//}
