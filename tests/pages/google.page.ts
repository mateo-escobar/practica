import {Locator, type Page } from '@playwright/test';


export class GooglePage {
    readonly page: Page;
    readonly playwrightLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.playwrightLink = this.page.getByText('Playwright: Fast and reliable end-to-end testing for modern web apps');
    }

    async open() {
      await this.page.goto('https://www.google.com/');
    }
  
    async searchFor(query: string) {
      await this.page.getByLabel('Buscar', { exact: true }).fill(query);
      await this.page.keyboard.press('Enter');
    }
  
    async getPlaywrightLink() {
      return this.playwrightLink;
    }
  }