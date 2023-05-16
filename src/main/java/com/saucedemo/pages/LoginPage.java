package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userName;

    @CacheLookup
    @FindBy(id="password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement clickOnLogin;

    @CacheLookup
    @FindBy(xpath = "//span[@class='title']")
    WebElement productText;

    @CacheLookup
    @FindBy(className = "inventory_item")
    List<WebElement>products6;

        public void sendTextToUserNameField() {

           log.info("Send Text to UserName Field" +userName.toString());
            sendTextToElement(userName, "standard_user");
        }

        public void sendTextToPasswordField() {

           log.info("Send Text to Password Field" + password.toString());
            sendTextToElement(password, "secret_sauce");
        }

        public void clickOnLoginButton() {

           log.info("Click On Login button" + clickOnLogin.toString());
            clickOnElement(clickOnLogin);
        }
    public String getProductText(){

        log.info("verify product text" + productText.toString());
        return getTextFromElement(productText);
    }

    public void get6Products(){
        List<WebElement> totalProducts = products6;
        System.out.println("Total Numbers of Products" + totalProducts.size());

        log.info("click on Login button" + products6.toString());
    }
    }

