import { test, expect } from '@playwright/test';
import Contact from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact Page', () => {
    let contact: Contact;

    test('Fill up the contact forms', async ({ page }) => {
        contact = new Contact(page);

        await contact.navigate();

        // find input forms
        await contact.fillInputFields(
            faker.name.fullName(),
            faker.internet.email(),
            faker.phone.number(),
            faker.lorem.paragraph()
        );

        await contact.submitBtn.click();

        expect(test.info().errors.length).toBeLessThan(1);

        await expect(contact.confirmationMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});