const puppeteer = require('puppeteer');

(async () => {
  
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
 
  await page.goto('https://www.hai-sya.com/');
  
  await page.screenshot({path: 'haisya.com.png'});
  
  await browser.close();
})();