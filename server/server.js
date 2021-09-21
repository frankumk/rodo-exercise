const express = require('express');
const app = express();
module.exports = app
const path = require('path');
const axios = require('axios');
const cors = require('cors')
app.use(express.json())
app.use(cors())


const { vehicleCounter, priceCalcs, modelCounter, modelList } = require("./helper.js");

const port = process.env.PORT || 3080;
app.listen(port,()=>console.log(`listening on port: ${port}`))


app.put('/api/Search', async (req, res, next) => {
  //req.body contains the search parameters
  try {
    const budget = parseInt(req.body.budget)
    let results;
    if(budget){
      //returns values within budget
      const minPrice = budget - budget/10
      const maxPrice = budget + budget/10
      results = ((await axios.get(`http://localhost:3000/cars?make_like=${req.body.make}&model_like=${req.body.model}&year_like=${req.body.year}&price_gte=${minPrice}&price_lte=${maxPrice}&_sort=price`)))
    }else{
      //does not take into account budget if client did not select a price
      results = ((await axios.get(`http://localhost:3000/cars?make_like=${req.body.make}&model_like=${req.body.model}&year_like=${req.body.year}&_sort=price`)))
    }

    if(results.data.length===0){
      res.send(null)
    }else{
      const vehicleCount = vehicleCounter(results.data)
      const priceData = priceCalcs(results.data)
      const modelCounts = modelCounter(results.data)

      //sending the 5 cheapest cars for the customer to view
      res.status(200).send({
        total: {
          vehicles: vehicleCount,
          subgroup: modelCounts
        },
        priceData: priceData,
        bestMatches: modelCounts.slice(0,5)
      })
    }
  } 
  catch (ex) {
    next(ex);
  }
});

app.get('/api/modelsPerMake', async (req, res, next) => {
  try {
    const allcars= (await axios.get(`http://localhost:3000/cars`)).data
    const modelListForMake = modelList(allcars)
    res.send(modelListForMake)
  } 
  catch (ex) {
    next(ex);
  }
});

app.put('/api/modelsPerMake', async (req, res, next) => {
  try {
    const allCarsWithMake = (await axios.get(`http://localhost:3000/cars?make_like=${req.body.make}`)).data
    const modelListForMake = modelList(allCarsWithMake)
    res.send(modelListForMake)
  } 
  catch (ex) {
    next(ex);
  }
});

//allcars returned as a general starting point. This is not used.
app.get('/api/allCars', async (req, res, next) => {
  try {
    res.send((await axios.get('http://localhost:3000/cars/')).data);
  } 
  catch (ex) {
    next(ex);
  }
});

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})