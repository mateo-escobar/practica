import { test, expect } from '@playwright/test';
import { GooglePage } from './pages/google.page.ts';

test.only("When a user tries to search for playwright on google And clicks on the first link", async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.open();
    await googlePage.searchFor('playwright');
    expect(await googlePage.getPlaywrightLink()).toBeVisible({timeout: 7000});
    await googlePage.playwrightLink.click();
    expect(page.url()).toBe('https://playwright.dev/');
});
