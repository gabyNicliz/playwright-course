import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeText: Locator;
    searchIcon: Locator;
    navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeText = page.locator('#primary-menu:has-text("Home")');
        this.searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]');
        this.navLinks = page.locator('#primary-menu li[id*=menu]');
    }

    async navigate() {
        await this.page.goto(('/'));
    }

    async getNavlinksText() {
        return this.navLinks.allInnerTexts();
    }
}

export default HomePage;