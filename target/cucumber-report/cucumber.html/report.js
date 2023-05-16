$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5977315800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Shold Login Successfully With Valid Credentials",
  "description": "",
  "id": "login-test;user-shold-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter “standard_user” username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter “secret_sauce” password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can Click on ‘LOGIN’ button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can Verify the text “PRODUCTS”",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 213166200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterStandard_userUsername()"
});
formatter.result({
  "duration": 213310100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterSecret_saucePassword()"
});
formatter.result({
  "duration": 122374200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanClickOnLOGINButton()"
});
formatter.result({
  "duration": 192284400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanVerifyTheTextPRODUCTS()"
});
formatter.result({
  "duration": 106217500,
  "status": "passed"
});
formatter.after({
  "duration": 1150109200,
  "status": "passed"
});
formatter.before({
  "duration": 3411136600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify That Six Products Are Displayed On Page",
  "description": "",
  "id": "login-test;verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Enter “standard_user” username",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Enter “secret_sauce” password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can Click on ‘LOGIN’ button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Verify that six products are displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterStandard_userUsername()"
});
formatter.result({
  "duration": 206068800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterSecret_saucePassword()"
});
formatter.result({
  "duration": 282333500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanClickOnLOGINButton()"
});
formatter.result({
  "duration": 235095200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanVerifyThatSixProductsAreDisplayedOnPage()"
});
formatter.result({
  "duration": 102565900,
  "status": "passed"
});
formatter.after({
  "duration": 1015662200,
  "status": "passed"
});
});