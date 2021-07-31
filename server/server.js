const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middleware = jsonServer.defaults()
const port = process.env.PORT || 3000

//https://spin.atomicobject.com/2018/10/08/mock-api-json-server

server.use(middleware)
server.use(router)
server.listen(port)