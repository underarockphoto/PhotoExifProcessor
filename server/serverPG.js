const express = require('express')
const bodyParser  = require('body-parser');
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 4000
const router = express.Router()
const fs = require('fs')
const {existsSync,readdirSync} = fs;

router.get('/', (req, res) => {
    res.send({object:'Hello World!'})
  })
  router.route('/fileExists').post( (req, res) => {
    let myobj = {
        id:req.body
    }
    console.log(req.body.id)
    // let path = req.params[0].replace('{"',"").replace('"}',"")
    // if (path.includes("../[x")){
    //     const numUps = Number(path.split("x")[1].split("]")[0])
    //     const restOfPath = path.split("x")[1].split("]")[1]
    //     path=""
    //     console.log(numUps)
    //     for (let i=0;i<numUps;i++){
    //         path = path+"../"
    //         console.log(path)
    //     }
    //     path = path+restOfPath
    // }
    // const exists = existsSync(path)
    // let files = [];
    // if (exists){
    //      files = readdirSync(path)
    // }else{
    //     files = [];
    // }
    // res.send({path:path,exists:exists,files:files})
  })
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})