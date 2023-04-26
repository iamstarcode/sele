const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();

const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options.addArguments('--headless'))
    .build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
