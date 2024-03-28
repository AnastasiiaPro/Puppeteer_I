let page;

beforeEach(async () => {
  page = await browser.newPage();
}, 10000);

afterEach(() => {
  page.close();
});

describe("Github team page tests", () => {
  beforeEach(async () => {
  await page.goto("https://github.com/team");
}, 20000);

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  }, 10000);  
});
  
describe("Github titles page tests", () => {
   test("The h1 header content on page enterprise", async () => {
    await page.goto("https://github.com/enterprise");
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("The AI Powered Developer Platform. · GitHub");
  }, 15000);

  test("The h1 header content on page startups", async () => {
    await page.goto("https://github.com/enterprise/startups",);
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("GitHub for Startups: Build your startup on GitHub · GitHub");
  }, 15000);

  test("The h1 header content on page education", async () => {
    await page.goto("https://education.github.com",);
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("Engaged students are the result of using real-world tools - GitHub Education");
  }, 15000);
});
