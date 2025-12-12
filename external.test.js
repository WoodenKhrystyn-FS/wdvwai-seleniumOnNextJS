require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

driver
  .get("http:http://localhost:3000")
  .then((_) =>
    driver.findElement(By.name("q")).sendKeys("nicholas cage", Key.RETURN)
  )
  .then((_) =>
    driver.wait(until.titleIs("nicholas cage - Google Search"), 1000)
  )
  .then((_) => driver.quit());
