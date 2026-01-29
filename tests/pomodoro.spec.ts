import { test, expect } from '@playwright/test';

test.describe('Pomodoro', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the scuderia logo', async ({ page }) => {
    const scuderiaLogo = page.getByTestId('scuderia-logo');
    await expect(scuderiaLogo).toBeVisible();
    await expect(scuderiaLogo).toHaveAttribute('alt', /scuderia/i);
    await expect(scuderiaLogo).toHaveAttribute('src');
  });

  test('should display the scuderia sprite', async ({ page }) => {
    const scuderiaSprite = page.getByTestId('scuderia-sprite');
    await expect(scuderiaSprite).toBeVisible();
  });

  test('should load the sprite image completely', async ({ page }) => {
    const scuderiaSprite = page.getByTestId('scuderia-sprite');
    await expect(scuderiaSprite).toBeVisible();

    const bgImage = await scuderiaSprite.evaluate(
      (el) => window.getComputedStyle(el).backgroundImage
    );

    expect(bgImage).not.toBe('none');
    expect(bgImage).toContain('url');

    const boundingBox = await scuderiaSprite.boundingBox();
    expect(boundingBox).not.toBeNull();
    expect(boundingBox!.width).toBeGreaterThan(0);
    expect(boundingBox!.height).toBeGreaterThan(0);
  });

  test('should have correct initial sprite CSS properties', async ({ page }) => {
    const scuderiaSprite = page.getByTestId('scuderia-sprite');
    await expect(scuderiaSprite).toBeVisible();

    const sprite = await scuderiaSprite.evaluate(
      (el) => window.getComputedStyle(el).backgroundImage
    );
    expect(sprite).not.toBe('none');

    await expect(scuderiaSprite).toHaveCSS('z-index', '2');
    await expect(scuderiaSprite).toHaveCSS('animation', 'none');

    const bgSize = await scuderiaSprite.evaluate(
      (el) => window.getComputedStyle(el).backgroundSize
    );
    expect(bgSize).not.toBe('auto');
  });
});
