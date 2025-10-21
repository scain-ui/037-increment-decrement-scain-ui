const http = require("http");
const fs = require("fs");
const puppeteer = require("puppeteer");
const { assert } = require("console");

let server;
let browser;
let page;

beforeAll(async () => {
  server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/.." + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(process.env.PORT || 3000);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  page = await browser.newPage();
  await page.goto("http://localhost:3000/index.html");
});

afterEach(async () => {
  await browser.close();
});

describe('the index.js file', () => {
  it('should initialize a variable named counter to the number 0', async function() {
    const counter = await page.evaluate(() => counter);
    expect(counter).toBeDefined();
  });

  it('should assign the prefix incremented value of counter to a variable named prefixIncrement', async function() {
    const prefixIncrement = await page.evaluate(() => prefixIncrement);
    expect(prefixIncrement).toBe(101);
  });

  it('should assign the postfix incremented value of counter to a variable named postfixIncrement', async function() {
    const postfixIncrement = await page.evaluate(() => postfixIncrement);
    expect(postfixIncrement).toBe(101);
  });

  it('should assign the prefix decrement value of counter to a variable named prefixDecrement', async function() {
    const prefixDecrement = await page.evaluate(() => prefixDecrement);
    expect(prefixDecrement).toBe(101);
  });

  it('should assign the postfix decrement value of counter to a variable named postfixDecrement', async function() {
    const postfixDecrement = await page.evaluate(() => postfixDecrement);
    expect(postfixDecrement).toBe(101);
  });

  it('should assign the innerHTML of the HTML element with the id result to the counter', async function() {
    const innerHtml = await page.$eval("#result", (result) => {
      return result.innerHTML;
    });
      
    expect(innerHtml).toBe('100');
  });
});
