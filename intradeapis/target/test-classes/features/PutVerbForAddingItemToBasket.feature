Feature: This feature will perform a CRUD operations to the Products EndPoint


  Background: This test will ensure Users are able to UPDATE an Items in a basket


  As a Test Engineer
  I will like to perform a PUT VERB operation to the products EndPoint
  So that I can ensure Users are able to UPDATE Items in a basket
  and ensure the functionality works as expected and returns
  a correct Http response code with a returned body content.

  @WIP
  Scenario: This call will verify a PUT VERB to Products API
    Given   An EndPoint for Products service is set up
    When    I perform a PUT call to Product EndPoint
    Then    I should be able to update an item in a basket and assert both returned data and http response code.
