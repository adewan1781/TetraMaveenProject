package com.driver;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.CapabilityType.ForSeleniumServer;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Objects;
import java.util.Properties;

public class DriverInstance {
	private static DriverInstance driverInstance = new DriverInstance();
	protected WebDriverWait wait;
	WebDriver driver;
	static Properties prop1;

	private DriverInstance() {
		if(driver==null) {
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setPlatform(Platform.WINDOWS);
			capabilities.setBrowserName("firefox");
			capabilities.setCapability(ForSeleniumServer.PROXYING_EVERYTHING, true);
			capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			capabilities.setCapability(CapabilityType.SUPPORTS_ALERTS, true);
			capabilities.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
			
			driver = new FirefoxDriver(capabilities);
			wait =  new WebDriverWait(driver, 50);
		}
	}

	public static DriverInstance getDriverInstance() {
		return driverInstance;
	}
	
	 public WebDriverWait getWait() {
			return wait;
		}

		public WebDriver getDriver() {
			return driver;
		}
		
		public static void loadConfig() throws IOException {
			prop1 = new Properties();
			 String fileName = "config.properties";
	            ClassLoader classLoader = DriverInstance.class.getClassLoader();

	            // Make sure that the configuration file exists
	            URL res = Objects.requireNonNull(classLoader.getResource(fileName),
	                "Can't find configuration file app.config");

	            InputStream is;
	            is = new FileInputStream(res.getFile());
	            // load the properties file
	            prop1.load(is);
		}
}
