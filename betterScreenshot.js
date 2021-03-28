const puppeteer = require("puppeteer");
const capture = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 1920, height: 1080 });
	await page.goto("https://youtube.com");
	await page.screenshot({ path: "screenshot.png", fullPage: true });

	await browser.close();
};
