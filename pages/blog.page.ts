import { expect, Locator, Page } from '@playwright/test';

class Blog {
  page: Page;
  blogLinks: Locator;

  constructor (page: Page) {
    this.page = page;
    this.blogLinks = page.locator('#recent-posts-3 li');
  }

  async navigate() {
    await this.page.goto(('/blog/'));
  }

  async checkElementsLength() {
    for (const el of await this.blogLinks.elementHandles()) {
      expect((await el.textContent())?.length).toBeGreaterThanOrEqual(10);
    }
  }
}

export default Blog;