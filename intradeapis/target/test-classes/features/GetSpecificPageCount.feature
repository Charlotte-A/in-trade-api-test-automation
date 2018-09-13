Feature: This feature will perform a CRUD operations to the Products EndPoint


  Background: This test will focus on getting a specific page back


  As a Test Engineer
  I will like to perform a GET operation to the products EndPoint
  So that I can retrieve a specific page count
  and ensure the call returns a correct page and Http response code with a returned body content.

  @SmokeTest007
  Scenario: This call will verify the GET VERB to Products API
    Given   I have access to Products services EndPoint
    When    I perform a GET call by with one page count
    Then    I should see one page returned and assert both returned data and http response code.
