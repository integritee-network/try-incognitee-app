import { test, expect } from '@playwright/test';

test('Capture screenshot with mocked Pinia state', async ({ page }) => {
  // Set the viewport to mimic a Google Pixel 7
  await page.setExtraHTTPHeaders({
    'User-Agent': 'Mozilla/5.0 (Linux; Android 12; Pixel 7 Build/SP1A.210812.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36'
  });
  await page.setViewportSize({ width: 800, height: 1500});

  // Navigate to your Nuxt app
  await page.goto('http://localhost:3000/?seed=0xe387bd8f1bb23d06976144e98d18ce262a13c005306df721033e9e7b5baa49e7'); // Adjust if needed

  // Reload the page so the mock state takes effect
  await page.reload();

  // Wait for the page to load completely
  await page.waitForLoadState('load');
  await page.addStyleTag({ content: 'html { zoom: 2; }' });
  // Use CSS to scale the content
  // await page.evaluate(() => {
  //   document.body.style.transform = 'scale(4)';
  //   document.body.style.transformOrigin = '0 0';
  // });
  // Optionally, add a delay to ensure all elements are rendered
  await page.waitForTimeout(5000);
  await page.click("#private-balance-tab-selector");
  // Capture and save the screenshot
  await page.screenshot({ path: 'screenshots/pixel7-mock.png', fullPage: false });
});
