#!/usr/bin/env node

const { By, Key, Builder } = require("selenium-webdriver");
require("edgedriver");

// not using for now
// const uniqid = require("uniqid"); 
const { v4: uuidv4 } = require('uuid');

async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();

  await driver.get("https://www.bing.com/search?q=123");

  // driver.findElement(driver.By.tagName('body')).sendKeys(Key.F12);

  for (let i = 0; i < 90; i++) {
    let searchE = driver.findElement(By.id("sb_form_q"));
    await searchE.clear();
    await searchE.sendKeys(uuidv4());
    await searchE.sendKeys(Key.ENTER);

    let now = Date.now(),
      end = now + 3000;
    while (now < end) {
      now = Date.now();
    }
  }

  
  console.log("Completed");

  driver.quit();
}

example();
