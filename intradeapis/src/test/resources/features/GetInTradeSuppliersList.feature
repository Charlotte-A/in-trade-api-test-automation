Feature: This feature will perform a CRUD operations to produce all the In-Trade Suppliers List


  Background: This test will retrieve the list of suppliers of In-Trade


  As a Test Engineer
  I will like to perform a GET operation to the retrieve EndPoint
  So that I can retrieve a list of all In-Trade Suppliers
  and verify the Http response code as well as the returned body content.

  @SmokeTest003
  Scenario: This call will verify the GET VERB of the Suppliers API
    Given I have setup an EndPoint for the Suppliers
    When  I perform a GET call
    Then  I should see a list of available categories and valid response code.
