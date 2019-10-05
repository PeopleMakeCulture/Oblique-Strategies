
const express = require('express')
const app = express()
const port = 3000
const strategies =require('../utils/obliqueStrategies.js' )

//TODO: set up API to send random strategy 

app.get('/', (req, res, next) => res.send(strategies[Math.floor(Math.random() * strategies.length)]
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))