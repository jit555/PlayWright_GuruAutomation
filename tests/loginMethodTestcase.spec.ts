import { test, expect } from '@playwright/test'

import { LoginPanel } from '../pageObjects/loginPanel'
import { base_URL } from '../files/constants/constants'
import loginData from '../testData/login.Config.json'

test.describe('Cohort Tests', () => {
    for (const data of loginData) {
      const testName = 'Name: ' + data.Name
      test(testName, async ({ browser }) => 
    {
        const context = await browser.newContext()
        const page = await context.newPage()
        

        const loginPanel = new LoginPanel(page)

        await page.goto(base_URL)
        await loginPanel.loginMethod(data.Username,data.Password)   
         
    
    })
}
})
