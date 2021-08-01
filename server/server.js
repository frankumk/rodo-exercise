// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('./server/db.json')
// const middleware = jsonServer.defaults()
// const port = process.env.PORT || 3000


// const express = require('express');
// const app = express();

// //https://spin.atomicobject.com/2018/10/08/mock-api-json-server

// server.use(middleware)
// server.use(router)
// server.listen(port, ()=> {
//   console.log("JASON is running on port ", port)
// })

// const db = require('./db.json');

// server.use(jsonServer.bodyParser);

// // Have all URLS prefixed with a /api
// server.use(
//   jsonServer.rewriter({
//     '/api/cars': '/cars',
//   })
// );

// server.get('/api/query',(req,res,next)=>{
//   try{
//     console.log('here')
//   }catch(ex){
//     next(ex)
//   }
// })



// // error handling endware
// server.use((err, req, res, next) => {
//   console.error(err)
//   console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error.')
// })


const express = require('express');
const app = express();
module.exports = app
const path = require('path');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


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
    console.log('max price',maxPrice)
    const results = ((await axios.get(`http://localhost:3000/cars?make_like=${req.body.make}&model_like=${req.body.model}&year=${req.body.year}&price_gte=${minPrice}&price_lte=${maxPrice}`)))
    console.log(results.data)

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