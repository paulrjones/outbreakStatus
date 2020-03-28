const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el1] = await page.$x('//*[@id="sortable_table_Global"]/tbody/tr[1]/td[2]')
    const txt1 = await el1.getProperty('textContent')
    const cases = await txt1.jsonValue()

    console.log({cases})
    browser.close()
}

scrapeProduct('https://ncov2019.live/')