const express = require('express');
const app = express();
module.exports = app
const path = require('path');
const axios = require('axios');
const cors = require('cors')
//const bodyParser = require('body-parser');
app.use(express.json())
app.use(cors())


const { vehicleCount, priceCalcs } = require("./helper.js");

const port = process.env.PORT || 3080;
app.listen(port,()=>console.log(`listening on port: ${port}`))

app.get('/api/allCars', async (req, res, next) => {
  try {
    res.send((await axios.get('http://localhost:3000/cars')).data);
  } 
  catch (ex) {
    next(ex);
  }
});

app.put('/api/Search', async (req, res, next) => {
  try {
    //res.send();
    console.log(req.body)
    const budget = parseInt(req.body.budget)
    const minPrice = budget - budget/10
    const maxPrice = budget + budget/10
    const results = ((await axios.get(`http://localhost:3000/cars?make_like=${req.body.make}&model_like=${req.body.model}&year_like=${req.body.year}&price_gte=${minPrice}&price_lte=${maxPrice}`)))
    console.log(results.data)
    const vehicleCount = vehicleCount(results.data)
    const matchCount = results.data.length

  } 
  catch (ex) {
    next(ex);
  }
});



// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})