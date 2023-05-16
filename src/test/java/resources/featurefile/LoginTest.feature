Feature: Login Test

  @sanity @regression
   Scenario: User Shold Login Successfully With Valid Credentials
     Given I am on homepage
     When I Enter “standard_user” username
     And I Enter “secret_sauce” password
     And I can Click on ‘LOGIN’ button
     Then I can Verify the text “PRODUCTS”


@smoke @regression
   Scenario: verify That Six Products Are Displayed On Page
     Given I am on homepage
     When I Enter “standard_user” username
     And I Enter “secret_sauce” password
     And I can Click on ‘LOGIN’ button
     Then I can Verify that six products are displayed on page