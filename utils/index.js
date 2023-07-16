const cheerio = require('cheerio')

function fetchPrice(html){
    const $ = cheerio.load(html)
    const prices = $('td:nth-child(6)').get().map(value => $(value).text());
    return prices;
}

module.exports = {
    fetchPrice,
}