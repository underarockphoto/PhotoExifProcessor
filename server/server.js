const express = require('express')

const cors = require('cors')
const app = express()
app.use(cors())
const port = 4000
const router = express.Router()
const fs = require('fs')
const {existsSync} = fs;

router.get('/', (req, res) => {
    res.send({object:'Hello World!'})
  })
  router.get('/pathExists/:path', (req, res) => {
    const path = req.params.path
    const exists = existsSync(path)
    res.send({exists:exists})
  })
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})