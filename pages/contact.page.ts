import { Page, Locator } from '@playwright/test';

class Contact {
    page: Page;
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messageTextarea: Locator;
    submitBtn: Locator;
    confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('.contact-name input');
        this.emailInput = page.locator('.contact-email input');
        this.phoneInput = page.locator('.contact-phone input');
        this.messageTextarea = page.locator('.contact-message textarea');
        this.submitBtn = page.locator('button[type=submit]');
        this.confirmationMessage = page.locator('div[role="alert"]');
    }

    async fillInputFields(name, email, phone, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageTextarea.fill(message);
    }

    async navigate() {
        await this.page.goto(('/contact/'));
    }
}

export default Contact;