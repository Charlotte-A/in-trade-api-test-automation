Feature: This feature will perform a CRUD operations to the Products EndPoint


  Background: This is to test and assert a products pages numbers


  As a Test Engineer
  I will like to perform a GET operation to the products EndPoint
  So that I can assert the number of products pages
  and ensure the call returns a correct Http response code as well as a returned body content.

  @SmokeTest005
  Scenario: This call will verify the GET VERB of the Products API
    Given   I have set up an EndPoint for Products
    When    I perform a GET call by using a page appended uri
    Then    I should see a products by their pages and valid response code and assert the returned data.
