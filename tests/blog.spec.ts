import { test, expect } from '@playwright/test';
import Blog from '../pages/blog.page';

test.describe('Blog Page', () => {
    let blog: Blog;

    test('Verify the lenght of the blog list and verify the lenght of the blog titles', async ({ page }) => {
        blog = new Blog(page);

        await blog.navigate();

        expect(await blog.blogLinks.elementHandles()).toHaveLength(5);

        await blog.checkElementsLength();
    });
});