const express = require('express')
const cors = require('cors')
const routes = require('./modules/routes')
const bodyParser  = require('body-parser');
const port = 4000
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`EXIF Processor server running on port ${port}`)
})