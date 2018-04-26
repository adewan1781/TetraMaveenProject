package com.stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.driver.DriverInstance;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BoxLoginLogoutSteps {
	
	DriverInstance instance = DriverInstance.getDriverInstance();
	WebDriver driver = instance.getDriver();
	WebDriverWait wait = instance.getWait();
	
	@Before
	public void beforeScenario(Scenario sc){
		System.out.println(sc.getName());
		
	}
	
	@Given("^I want to navigate to box website$")
	public void navigateToBox() {
		String appUrl = "https://app.box.com/";
		driver.get(appUrl);

	}
		
	@Then("^page with title \"([^\"]*)\" should open$")
	public void veriifyPageTitle(String title) {
		boolean flag = wait.until(ExpectedConditions.titleIs(title));
		Assert.assertTrue("Given title "+title+" could not be found", flag);
	}


	@When("^user enter \"([^\"]*)\" username$")
	public void enterUserName(String name) {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name=\"login\"]"))).sendKeys(name);
	}

	@And("^Click on Next button$")
	public void clickNext(){
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("button[type=\"submit\"]"))).click();
	    
	}

	@Then("^User should be able to enter \"([^\"]*)\" password")
	public void enterPassword(String password){
	 WebElement passwordField = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[name=\"password\"]")));
	 passwordField.sendKeys(password);
	}

	@And("^user clicks on login button$")
	public void clickLoginButton(){
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[type=\"submit\"]"))).click();
	   
	}

	@When("^user clicks on logout button$")
	public void clickLogoutBtn() throws Throwable {
		Thread.sleep(3000);
		WebElement acctmenu=new WebDriverWait(driver,45).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[data-resin-target=\"accountmenu\"] ")));
		acctmenu.click();
		
		WebElement logout= wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul[data-resin-feature=\"accountmenu\"] [data-resin-target=\"logout\"]")));
		logout.click();
	}



}