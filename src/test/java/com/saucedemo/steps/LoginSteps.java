package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I Enter “standard_user” username$")
    public void iEnterStandard_userUsername() {
        new LoginPage().sendTextToUserNameField();
    }

    @And("^I Enter “secret_sauce” password$")
    public void iEnterSecret_saucePassword() {
        new LoginPage().sendTextToPasswordField();
    }

    @And("^I can Click on ‘LOGIN’ button$")
    public void iCanClickOnLOGINButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I can Verify the text “PRODUCTS”$")
    public void iCanVerifyTheTextPRODUCTS() {
        Assert.assertEquals(new LoginPage().getProductText(),"Products");
    }

    @Then("^I can Verify that six products are displayed on page$")
    public void iCanVerifyThatSixProductsAreDisplayedOnPage() {
        new LoginPage().get6Products();


    }


    }
