$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BoxLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  TetraNoodle"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Login and Logout from Box app"
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 4,
  "name": "Box loginlogout",
  "description": "",
  "id": "box-loginlogout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cuser\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 19,
      "id": "box-loginlogout;box-loginlogout-scenario;;1"
    },
    {
      "cells": [
        "h2so4in2008@gmail.com",
        "Qazplm123"
      ],
      "line": 20,
      "id": "box-loginlogout;box-loginlogout-scenario;;2"
    },
    {
      "cells": [
        "nancydhingra131@gmail.com",
        "nancy131"
      ],
      "line": 21,
      "id": "box-loginlogout;box-loginlogout-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2715280384,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"h2so4in2008@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"Qazplm123\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 2923192384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 12338682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h2so4in2008@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 72834878,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 829658350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qazplm123",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 39981197,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3492087890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 15924140,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4775925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 6107164,
  "status": "passed"
});
formatter.before({
  "duration": 45219,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"nancydhingra131@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"nancy131\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 1209749948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 5464612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancydhingra131@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 57203570,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 818878275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancy131",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 60767146,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 2961078175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 14578499,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4758279972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 4537616,
  "status": "passed"
});
formatter.uri("CreateFolder.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  TetraNoodle"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Create and Delete folder from Box app."
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 4,
  "name": "CreateFolder",
  "description": "",
  "id": "createfolder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Createfolder scenario",
  "description": "",
  "id": "createfolder;createfolder-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@createfolder"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cuser\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on new button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on new folder link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Create folder pop up should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "enter folder name given below:",
  "rows": [
    {
      "cells": [
        "Dcfolder"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on create folder button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select the newly created folder row",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "createfolder;createfolder-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 30,
      "id": "createfolder;createfolder-scenario;;1"
    },
    {
      "cells": [
        "h2so4in2008@gmail.com",
        "Qazplm123"
      ],
      "line": 31,
      "id": "createfolder;createfolder-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37196,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Createfolder scenario",
  "description": "",
  "id": "createfolder;createfolder-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@createfolder"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"h2so4in2008@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"Qazplm123\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on new button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on new folder link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Create folder pop up should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "enter folder name given below:",
  "rows": [
    {
      "cells": [
        "Dcfolder"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on create folder button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select the newly created folder row",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 1163036538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 8648565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h2so4in2008@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 62113880,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 731619885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qazplm123",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 41932193,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3029679938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 16887604,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickNewMenu()"
});
formatter.result({
  "duration": 382056817,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickCreateFolderMenu()"
});
formatter.result({
  "duration": 50133967061,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: button[data-resin-target\u003d\"newfolder12\"] (tried for 50 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat com.stepDefinations.CreateFolderSteps.clickCreateFolderMenu(CreateFolderSteps.java:36)\r\n\tat ✽.And click on new folder link(CreateFolder.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: button[data-resin-target\u003d\"newfolder12\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DREAMBOX\u0027, ip: \u0027192.168.1.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.stepDefinations.CreateFolderSteps.clickCreateFolderMenu(CreateFolderSteps.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateFolderSteps.verifyFolderPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateFolderSteps.enterFolderName(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateFolderSteps.createFolderBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "folder",
      "offset": 25
    }
  ],
  "location": "CreateFolderSteps.selectFolderRow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateFolderSteps.clickTrash()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateFolderSteps.verifyFolderPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateFolderSteps.confirmOk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Upload.feature");
formatter.feature({
  "line": 1,
  "name": "CreateFolder",
  "description": "",
  "id": "createfolder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "upload scenario",
  "description": "",
  "id": "createfolder;upload-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@upload"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user clicks on logout button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cuser\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to enter \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on foldername hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "page with title \"serious123 | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on upload button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Check the confirmation popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the newly created row",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "createfolder;upload-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 24,
      "id": "createfolder;upload-scenario;;1"
    },
    {
      "cells": [
        "nancydhingra131@gmail.com",
        "nancy131"
      ],
      "line": 25,
      "id": "createfolder;upload-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44855,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "upload scenario",
  "description": "",
  "id": "createfolder;upload-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@upload"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user clicks on logout button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter \"nancydhingra131@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to enter \"nancy131\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on foldername hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "page with title \"serious123 | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on upload button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Check the confirmation popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the newly created row",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4754958539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 5178710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancydhingra131@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 59137062,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 609824122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancy131",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 41286724,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3264873063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 9581397,
  "status": "passed"
});
formatter.match({
  "location": "UploadSteps.click_on_foldername_hyperlink()"
});
formatter.result({
  "duration": 276366071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "serious123 | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 1550654969,
  "status": "passed"
});
formatter.match({
  "location": "UploadSteps.click_on_upload_button()"
});
formatter.result({
  "duration": 3417389903,
  "status": "passed"
});
formatter.match({
  "location": "UploadSteps.confirmation_message_displayed()"
});
formatter.result({
  "duration": 9032780017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "CreateFolderSteps.selectFolderRow(String)"
});
formatter.result({
  "duration": 343302376,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickTrash()"
});
formatter.result({
  "duration": 316436614,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.verifyFolderPopup()"
});
formatter.result({
  "duration": 28274492,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.confirmOk()"
});
formatter.result({
  "duration": 315390733,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4710414928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 7286515,
  "status": "passed"
});
});