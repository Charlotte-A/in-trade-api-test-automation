Feature: This feature will perform a CRUD operations of Products Paginated


  Background: This test is to call the list of Products Paginated


  As a Test Engineer
  I will like to perform a GET operation of the Products Paginated EndPoint
  So that I can retrieve the list of Products
  and verify the Status code as well as the returned body content.

  @SmokeTest002
  Scenario: This call will preform a GET verb to the Products Paginated EndPoint
    Given I have setup an EndPoint for the Products Paginated
    When  I perform a GET operation to the API
    Then  I should see all the list of available Products and a valid response code.
