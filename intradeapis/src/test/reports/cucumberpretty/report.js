$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DispatcherApi.feature");
formatter.feature({
  "line": 1,
  "name": "This is feature to call configuration endPoint",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "STIG integration with JDA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "This will Test the POST Method for dispatch API",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint;this-will-test-the-post-method-for-dispatch-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have setup dispatcher Api",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I do POST Method",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see a response",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDispatcherApiStepDeff.i_have_setup_dispatcher_Api()"
});
formatter.result({
  "duration": 873648400,
  "status": "passed"
});
formatter.match({
  "location": "PostDispatcherApiStepDeff.iDoPOSTMethod()"
});
formatter.result({
  "duration": 1527582138,
  "status": "passed"
});
formatter.match({
  "location": "PostDispatcherApiStepDeff.i_should_see_a_response()"
});
formatter.result({
  "duration": 65045206,
  "status": "passed"
});
formatter.uri("features/GetChoActionApi.feature");
formatter.feature({
  "line": 1,
  "name": "This feature will make a GET call to Choreograpy Actions API",
  "description": "",
  "id": "this-feature-will-make-a-get-call-to-choreograpy-actions-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "STIG Layer Integration Test with JDA App",
  "description": "As a Test Engineer\r\nI will like to verify Http response for Actions",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "This will verify the GET verb for Action API",
  "description": "",
  "id": "this-feature-will-make-a-get-call-to-choreograpy-actions-api;this-will-verify-the-get-verb-for-action-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@regression1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have setup actions EndPoint",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I make a GET call",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "There should be a valid response back",
  "keyword": "Then "
});
formatter.match({
  "location": "GetChorActionsStepDeff.i_have_setup_actions_EndPoint()"
});
formatter.result({
  "duration": 1102538,
  "status": "passed"
});
formatter.match({
  "location": "GetChorActionsStepDeff.i_make_a_GET_call()"
});
formatter.result({
  "duration": 358112621,
  "status": "passed"
});
formatter.match({
  "location": "GetChorActionsStepDeff.there_should_be_a_valid_response_back()"
});
formatter.result({
  "duration": 21426239,
  "status": "passed"
});
formatter.uri("features/GetConfiguration.feature");
formatter.feature({
  "line": 1,
  "name": "This is feature to call configuration endPoint",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "STIG micro Services integration with JDA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "This is for testing a single  by GET Method",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint;this-is-for-testing-a-single--by-get-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have setup web Api",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I call the web api endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "There should be user details",
  "keyword": "Then "
});
formatter.match({
  "location": "GetConfigStepsDeff.iHaveSetupWebApi()"
});
formatter.result({
  "duration": 2059329,
  "status": "passed"
});
formatter.match({
  "location": "GetConfigStepsDeff.iCallTheWebApiEndpoint()"
});
formatter.result({
  "duration": 107445340,
  "status": "passed"
});
formatter.match({
  "location": "GetConfigStepsDeff.thereShouldBeUserDetails()"
});
formatter.result({
  "duration": 369275,
  "status": "passed"
});
formatter.uri("features/PostAudit.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is POST content to Audit endPoint",
  "description": "",
  "id": "this-feature-is-post-content-to-audit-endpoint",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "STIG integration with JDA WMS",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "This is will verify the POST Method Audit cloud services",
  "description": "",
  "id": "this-feature-is-post-content-to-audit-endpoint;this-is-will-verify-the-post-method-audit-cloud-services",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have setup a web Api for audit",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I post a content for the header and body",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The header and body content should exsist",
  "keyword": "Then "
});
formatter.match({
  "location": "PostAudiStepsDeff.iHaveSetupAWebApiForAudit()"
});
formatter.result({
  "duration": 1911695,
  "status": "passed"
});
formatter.match({
  "location": "PostAudiStepsDeff.iPostAContentForTheHeaderAndBody()"
});
formatter.result({
  "duration": 142616300,
  "status": "passed"
});
formatter.match({
  "location": "PostAudiStepsDeff.theHeaderAndBodyContentShouldExsist()"
});
formatter.result({
  "duration": 1097629,
  "status": "passed"
});
formatter.uri("features/PostTransformationApi.feature");
formatter.feature({
  "line": 1,
  "name": "This is feature to call configuration endPoint",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "STIG integration with JDA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "This will Test the POST Method for Transformation API",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint;this-will-test-the-post-method-for-transformation-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have setup transformation Api",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I post Header content and the body as raw",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "There should be a response",
  "keyword": "Then "
});
formatter.match({
  "location": "PostTransformationStepDeff.i_have_setup_transformation_Api()"
});
formatter.result({
  "duration": 1607365,
  "status": "passed"
});
formatter.match({
  "location": "PostTransformationStepDeff.i_post_Header_content_and_the_body_as_raw()"
});
formatter.result({
  "duration": 123304518,
  "status": "passed"
});
formatter.match({
  "location": "PostTransformationStepDeff.there_should_be_a_response()"
});
formatter.result({
  "duration": 1367978,
  "status": "passed"
});
formatter.uri("features/StigInstanceApi.feature");
formatter.feature({
  "line": 1,
  "name": "This is feature to call configuration endPoint",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "STIG micro Services integration with JDA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "This is for testing a single  by GET Method",
  "description": "",
  "id": "this-is-feature-to-call-configuration-endpoint;this-is-for-testing-a-single--by-get-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have setup web Api for instance",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I call the api endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "There should be a response back",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStigIntanceApiStepDeff.i_have_setup_web_Api_for_instance()"
});
formatter.result({
  "duration": 717405,
  "status": "passed"
});
formatter.match({
  "location": "GetStigIntanceApiStepDeff.i_call_the_api_endpoint()"
});
formatter.result({
  "duration": 77065135,
  "status": "passed"
});
formatter.match({
  "location": "GetStigIntanceApiStepDeff.there_should_be_a_response_back()"
});
formatter.result({
  "duration": 465180,
  "status": "passed"
});
});