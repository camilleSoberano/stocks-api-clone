const { fetchPrice } = require("../utils");

const baseURL = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

async function getHome(req, res){
    res.status(200).send({message:'Thank you for trying our API!'})
}

async function getStockPrices(req,res){
    const {stock} = req.query;
    console.log('---STOCK---', stock)
    
    if(!stock){
        return res.sendStatus(403)
    } 

    try {
        const stockDataURL = baseURL(stock);
        const stockResponse = await fetch(stockDataURL);
        const _data = await stockResponse.text()
        // console.log(_data)
       const prices = fetchPrice(_data)
        // console.log($.html())
        // res.sendStatus(200)
        res.status(200).send({prices})
    } catch(err){
        console.log(`ERROR: ${err}`);
        res.sendStatus(500)
    }
}

function postTest(req,res){
    const body = req.body;
    const {message} = body;
    console.log('this is the message: ', message);
    res.sendStatus(200)
}

function getParamsTest(req,res) {
    const {key} = req.params;
    console.log('The Keyword is:' + key );
    res.sendStatus(200)
}

function middleWareInterceptor(req,res, next){
    console.log('I am the middle ware');
    const {password} = req.query;
    if(!password){
        return res.sendStatus(403);
    }
    next()
}

module.exports = {
    getHome,
    getStockPrices,
    postTest,
    getParamsTest, 
    middleWareInterceptor
}