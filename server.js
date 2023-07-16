const express = require('express');
const { getStockPrices, getHome, postTest, getParamsTest, middleWareInterceptor } = require('./routes');
const app = express();
const port = 5353;

// https://finance.yahoo.com/quote/PYPL
// https://finance.yahoo.com/quote/PYPL/history?p=PYPL

// const baseURL = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

//MiddleWare
app.use(express.json());
app.use(require('cors')());
app.use(middleWareInterceptor)

//Routes
app.get('/',getHome);

app.get('/api/testParams/:key',getParamsTest)

app.get('/api/stock',getStockPrices)

app.post('/api/test', postTest)


app.listen(port, () => console.log(`Server has started on port ${port}`))