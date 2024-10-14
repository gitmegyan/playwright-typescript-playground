import test from "@playwright/test";

test("Verigy the login functionality", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("input.submit-button").click();
});