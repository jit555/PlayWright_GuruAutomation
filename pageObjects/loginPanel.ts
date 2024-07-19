import { Locator, Page } from '@playwright/test'


export class LoginPanel {
    readonly page: Page
    readonly uname: Locator
    readonly pwd: Locator
    readonly loginBtn: Locator

    constructor(page: Page)
    {
        this.page=page
        this.uname = page.locator("//input[@name='uid']")
        this.pwd = page.locator("//input[@name='password']")
        this.loginBtn = page.locator("//input[@value='LOGIN']")


    }

    async loginMethod(username: string, password: string)
    {
        await this.uname.fill(username)
        await this.pwd.fill(password)
        await this.loginBtn.click()
    }
}