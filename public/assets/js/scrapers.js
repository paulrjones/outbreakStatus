const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    // Number of cases
    const [el1] = await page.$x('//*[@id="sortable_table_Global"]/tbody/tr[1]/td[2]')
    const txt1 = await el1.getProperty('textContent')
    const cases = await txt1.jsonValue()
    
    // Number of deaths
    const [el2] = await page.$x('//*[@id="sortable_table_Global"]/tbody/tr[1]/td[4]')
    const txt2 = await el2.getProperty('textContent')
    const deaths = await txt2.jsonValue()
     
    // Number of Serious Cases
    const [el3] = await page.$x('//*[@id="sortable_table_Global"]/tbody/tr[1]/td[6]')
    const txt3 = await el3.getProperty('textContent')
    const seriousCases = await txt3.jsonValue()
    
    // Number of Recovered
    const [el4] = await page.$x('//*[@id="sortable_table_Global"]/tbody/tr[1]/td[7]')
    const txt4 = await el4.getProperty('textContent')
    const recovered = await txt4.jsonValue()
    


    console.log({cases, deaths, seriousCases, recovered})
    browser.close()
}

scrapeProduct('https://ncov2019.live/')

// export default scrapeProduct