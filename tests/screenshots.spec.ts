// Description: This file contains the test to capture screenshots of the wallet app.
// This is an end-to-end test, so we must use real accounts with real state
//
// generate with:
//   export INCOGNITEE_TEST_SEED=****************
//   npx playwright test tests/screenshots.spec.ts

import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
//import {ChainAId} from "@/configs/chains";
//import {ChainAssetId} from "@/configs/assets";
//import {useAccount} from "@/store/account";
dotenv.config();

test("Capture screenshots for mobile using DOT", async ({ page }) => {
  // Set the viewport to mimic a Google Pixel 7
  await page.setExtraHTTPHeaders({
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 12; Pixel 7 Build/SP1A.210812.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36",
  });
  // await page.setViewportSize({ width: 800, height: 1500});
  await page.setViewportSize({ width: 800 / 2, height: 1500 / 2 });

  const seed = process.env.INCOGNITEE_TEST_SEED;
  if (!seed) {
    throw new Error("INCOGNITEE_TEST_SEED environment variable is not set");
  }
  // Navigate to your Nuxt app
  await page.goto(`http://localhost:3000/dot?seed=${seed}`); // Adjust if needed
  // Reload the page so the mock state takes effect
  await page.reload();
  await page.waitForLoadState("load");
  //await page.addStyleTag({ content: 'html { zoom: 2; }' });
  //await page.addStyleTag({ content: 'body { zoom: 2; }' });
  await executeUserFlow(page, "(DOT)");
});

test("Capture screenshots for mobile using USDC.e", async ({ page }) => {
  // Set the viewport to mimic a Google Pixel 7
  await page.setExtraHTTPHeaders({
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 12; Pixel 7 Build/SP1A.210812.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36",
  });
  // await page.setViewportSize({ width: 800, height: 1500});
  await page.setViewportSize({ width: 800 / 2, height: 1500 / 2 });

  const seed = process.env.INCOGNITEE_TEST_SEED;
  if (!seed) {
    throw new Error("INCOGNITEE_TEST_SEED environment variable is not set");
  }
  // Navigate to your Nuxt app
  await page.goto(`http://localhost:3000/usdc.e?seed=${seed}`); // Adjust if needed
  // Reload the page so the mock state takes effect
  await page.reload();
  await page.waitForLoadState("load");
  //await page.addStyleTag({ content: 'html { zoom: 2; }' });
  //await page.addStyleTag({ content: 'body { zoom: 2; }' });

  await executeUserFlow(page, "(USDC.e)");
});

test("Capture screenshots for mobile Session Proxy mocking extension using DOT", async ({
  page,
}) => {
  // Set the viewport to mimic a Google Pixel 7
  await page.setExtraHTTPHeaders({
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 12; Pixel 7 Build/SP1A.210812.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36",
  });
  // await page.setViewportSize({ width: 800, height: 1500});
  await page.setViewportSize({ width: 800 / 2, height: 1650 / 2 });

  const seed = process.env.INCOGNITEE_TEST_SEED;
  if (!seed) {
    throw new Error("INCOGNITEE_TEST_SEED environment variable is not set");
  }
  // Navigate to your Nuxt app
  await page.goto(`http://localhost:3000/dot?seed=${seed}&mockExtension=true`); // Adjust if needed
  // Reload the page so the mock state takes effect
  await page.reload();
  await page.waitForLoadState("load");
  //await page.addStyleTag({ content: 'html { zoom: 2; }' });
  //await page.addStyleTag({ content: 'body { zoom: 2; }' });

  await page.waitForSelector("#private-balance-tab-selector");
  await page.waitForTimeout(2000);
  await page.waitForSelector("#session-key-decline");

  await page.screenshot({
    path: `screenshots/session-key-update(DOT).png`,
    fullPage: true,
  });
  await page.click("#session-key-decline");
});

const executeUserFlow = async (page: any, postfix: string) => {
  await page.waitForSelector("#public-balance-tab-selector");
  await page.click("#public-balance-shield");
  await page.fill("#shieldAmount", "11");
  await page.screenshot({
    path: `screenshots/wallet-public-shield${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.waitForSelector("#private-balance-tab-selector");
  await page.click("#private-balance-tab-selector");
  // wait until balance has finished loading and is displayed
  await page.waitForSelector("#private-balance-display");
  await page.waitForTimeout(1000);
  // Capture and save the screenshot
  await page.screenshot({
    path: `screenshots/wallet-private-balance${postfix}.png`,
    fullPage: false,
  });

  await page.click("#private-balance-send");
  await page.waitForSelector("#private-balance-send-transfer");
  await page.fill(
    "#recipientAddress",
    "15AjUnVGRVjA7Sos2z8viqKmXDvW4xhCmq94rUeydDfjWVPL",
  );
  await page.fill("#sendAmount", "2.5");
  await page.fill("#sendPrivateNote", "order #156");
  await page.screenshot({
    path: `screenshots/wallet-private-balance-send${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.click("#private-balance-receive");
  await page.waitForSelector("#accountAddress");
  await page.screenshot({
    path: `screenshots/wallet-private-balance-receive${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.click("#private-balance-unshield");
  await page.waitForSelector("#private-balance-unshield-submit");
  await page.fill(
    "#unshieldingRecipientAddress",
    "15AjUnVGRVjA7Sos2z8viqKmXDvW4xhCmq94rUeydDfjWVPL",
  );
  await page.fill("#unshieldAmount", "1.2");
  await page.screenshot({
    path: `screenshots/wallet-private-balance-unshieled${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.click("#wallet-tab-health-indicator");
  await page.screenshot({
    path: `screenshots/wallet-health-overlay${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.click("#sidebar-open");
  await page.waitForSelector("#sidebar-close");
  await page.waitForTimeout(1000); // let animation finish
  await page.screenshot({
    path: `screenshots/sidebar${postfix}.png`,
    fullPage: false,
  });

  await page.click("#sidebar-token-dropdown-toggle");
  await page.screenshot({
    path: `screenshots/sidebar-token-dropdown${postfix}.png`,
    fullPage: false,
  });
  await page.click("#sidebar-token-dropdown-toggle");

  // Inject fake vouchers into local storage
  await page.evaluate(() => {
    localStorage.setItem(
      "vouchers",
      '{"5wePd1LYa5M49gcko8pQLwiqwii9JoXA623wUr2NqLUx":[{"timestamp":"2024-12-02T16:01:44.630Z","shard":"5wePd1LYa5M49gcko8pQLwiqwii9JoXA623wUr2NqLUx","address":"14rE1EsbbHPHPPgdMZ63iqMSFGB7hhU2BGLYLcCT3e6h1VpY","seed":"0xf0e3aa747791340f3074b3c15ab1e637b920375ddabc7438046e3bbb87fc565d","url":"http://app.incognitee.io/?seed=0xf0e3aa747791340f3074b3c15ab1e637b920375ddabc7438046e3bbb87fc565d","amount":19,"note":"welcome"},{"timestamp":"2024-12-03T13:30:18.812Z","shard":"5wePd1LYa5M49gcko8pQLwiqwii9JoXA623wUr2NqLUx","address":"1ba1px66M7Stqp2fcEABrEfiTQxUnK5skoKfRPsgSbUBi45","seed":"0xb0e4cc271a3aee8b0c2aacfdb36978d43145667609b8cc2138c38166f1cec459","url":"http://app.incognitee.io/?seed=0xb0e4cc271a3aee8b0c2aacfdb36978d43145667609b8cc2138c38166f1cec459","amount":1.23,"note":"desd"},{"timestamp":"2024-12-04T08:40:06.505Z","shard":"5wePd1LYa5M49ghuhnp41SP1RwtPVcsuvcf7JzjHcbXg","address":"2MQDLjPL2KXKyBT62EASg84941YheJum22a4eS725zGeZp1N","seed":"0xf4e0b039da66318e578cb6058616ed294884601f7ce1e3d1d755ff0cbef668ac","url":"http://app.incognitee.io/?seed=0xf4e0b039da66318e578cb6058616ed294884601f7ce1e3d1d755ff0cbef668ac","amount":0.1,"note":"für dich"},{"timestamp":"2025-03-12T08:27:46.609Z","shard":"5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7i","address":"16eudGRibf8pQ57xNkXJqkadL3EqSJCwdpao5nkp9Cf8L3hf","seed":"0x1f1cb23a2086e5b01952877c0c975bd443afc2b2e4c7e9da3647f7b69bb1777c","url":"http://app.incognitee.io/usdc.e?seed=0x1f1cb23a2086e5b01952877c0c975bd443afc2b2e4c7e9da3647f7b69bb1777c","amount":42,"asset":"USDC.e","note":"new version 0.1 USDT"}]}',
    );
  });
  await page.click("#sidebar-vouchers");
  await page.waitForSelector("#vouchers-create");
  await page.waitForTimeout(1000); // let animation finish
  await page.screenshot({
    path: `screenshots/vouchers${postfix}.png`,
    fullPage: false,
  });
  await page.locator("#voucher-show").nth(0).click();
  await page.waitForSelector("#voucherAddress");
  await page.screenshot({
    path: `screenshots/voucher-share${postfix}.png`,
    fullPage: false,
  });
  await page.click("#overlay-close");

  await page.click("#sidebar-open");
  await page.waitForSelector("#sidebar-close");
  await page.click("#sidebar-messages");
  await page.waitForTimeout(1000); // let animation finish
  await page.waitForSelector("#message-submit");
  await page.fill("#chat-message-input", "Because w");
  await page.screenshot({
    path: `screenshots/messages-chat${postfix}.png`,
    fullPage: false,
  });

  await page.click("#chat-close");
  await page.click("#conversations-new");
  await page.fill("#conversationAddress", "sha");
  await page.screenshot({
    path: `screenshots/messages-conversations${postfix}.png`,
    fullPage: false,
  });
};
