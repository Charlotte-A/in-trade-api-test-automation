Feature: This feature will perform a CRUD operations to the Products EndPoint


  Background: This test will focus on getting a single item from a basket


  As a Test Engineer
  I will like to perform a GET operation to the products EndPoint
  So that I can retrieve a single item from basket
  and ensure the call returns a correct Http response code as well as a returned body content.

  @SmokeTest006
  Scenario: This call will verify the GET VERB to Products API
    Given   I have setup an EndPoint for Products services
    When    I perform a GET call by with a single item from a basket
    Then    I should see a single product returned and assert both returned data and http response code.
