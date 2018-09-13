Feature: This feature will perform a CRUD operations of the Products Categories


  Background: The Categories are the groups of which a product belongs to.


  As a Test Engineer
  I will like to perform a GET operation of the Categories EndPoint
  So that I can retrieve the list of Products Categories
  and verify the Http response code as well as the returned body content.

  @SmokeTest001
  Scenario: This call will verify the GET verb of Categories API
    Given I have setup an EndPoint for the categories
    When  I perform a GET operation
    Then  I should see all the list of available categories and valid response code.
