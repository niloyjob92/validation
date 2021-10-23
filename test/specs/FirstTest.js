const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: click } = require("webdriverio/build/commands/element/click");
const { default: setValue } = require("webdriverio/build/commands/element/setValue");

describe('Smoke Test', () => {

    it('Verify url', () => {

      browser.url('https://opensource-demo.orangehrmlive.com/')
      console.log('Session id is ',browser.sessionId);
      console.log('Capabilities',browser.capabilities);
      console.log(browser.capabilities);
      console.log('Trainer name is ', browser.config.trainerName);
      expect(browser).toHaveUrlContaining('opensource');
        
    });

    it('Verify title', () => {

      browser.url('https://opensource-demo.orangehrmlive.com/')
      expect(browser).toHaveTitle('OrangeHRM');
        
    });

    it('Verify login',async() => {

      await browser.url('https://opensource-demo.orangehrmlive.com/')
     const uname= await $('input[id="txtUsername"]');
    await  uname.setValue('Admin');
     const pass=await $('input[id="txtUsername"]');
     await pass.setValue('amin123');
      const btnlogin= await $('input[id="btnLogin"]');
     await btnlogin.click();
      
  
    });

});