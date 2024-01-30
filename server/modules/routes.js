const express = require("express")
const routes = express.Router();
const {filesInPath, validateFile} = require('../modules/fileManagement')
routes.route('/health').get((req,res)=>{
    const response = 'EXIF Processor Back End Server'
    res.json(response)
})
routes.route('/fileExists').post((req,res)=>{
   const response = validateFile(req)
   console.log(response)
})
let filesInPathResponse;
routes.route('/filesInPath').post((req,res,next)=>{
    const response = validateFile(req)
    if (response===true){
        const filesInThePath = filesInPath(req.body.path)
        res.json({files:filesInThePath})
    }else{
        filesInPathResponse = response
    }
 
})
routes.route('/getFilesInPath').get((req,res)=>{
    res.json({files:filesInPathResponse})
})

module.exports = routes