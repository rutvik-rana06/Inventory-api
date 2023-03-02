const express = require('express');
const router = require('./Router/Routes')
const cors = require('cors');

const app = express()
const port = 5000

app.use(cors());
app.use("/",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})