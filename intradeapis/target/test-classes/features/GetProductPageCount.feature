Feature: This feature will perform a CRUD operations to the Products EndPoint


  Background: This is to test that products can be retrieved their page count


  As a Test Engineer
  I will like to perform a GET operation to the products EndPoint
  So that I can retrieve products by page count
  and assert the Http response code as well as the returned body content.

  @SmokeTest004
  Scenario: This call will verify the GET VERB of the Products API
    Given   an EndPoint for the Products page is set up
    When    I perform a GET call by using a page count
    Then    I should see a products by their page count and valid response code.
