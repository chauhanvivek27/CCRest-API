const express = require('express')
const router = require('./src/route');
var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());
const port = 3000
app.options('/add', cors()) 
app.use(router);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))