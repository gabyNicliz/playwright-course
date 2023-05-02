import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async  ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('Open HomePage and verify title', async ({ page }) => {
        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    test('Open AboutPage and verify title', async ({ page }) => {
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    });

    test('Click get started button using CSS Selector', async ({ page }) => {
        // click the button
        await homePage.getStartedBtn.click();

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    });

    test('Verify heading text is visible using text selector', async ({ page }) => {
        // find text locator
        const headingText = homePage.headingText;

        await expect(headingText).toBeVisible();
    });

    test('Verify home link is enabled using text and CSS selector', async ({ page }) => {
        // find home text
        // const homeText = await page.locator('#primary-menu >> text=Home');
        const homeText = homePage.homeText;
        
        await expect(homeText).toBeEnabled();
    });

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        // verify search icon is visible
        const searchIcon = homePage.searchIcon;

        await expect(searchIcon).toBeVisible();
    });

    test('Verify the text for all nav links', async ({ page }) => {
        const expectedNavLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        // verify nav link text
        expect(await homePage.getNavlinksText()).toEqual(expectedNavLinks);
    });
});