const fs = require('fs')
const {existsSync,readdirSync} = fs

const pathExists = (path)=>{
    try {
        return existsSync(path)
    }catch{
        return "Error fetching path."
    }
}
const filesInPath = (path)=>{
    try {
        return readdirSync(path)
    }catch{
        return "Error fetching files in path."
    }
}

const validateFile = (req)=>{
        const request = req;
        const requestHasBody = request.hasOwnProperty("body")
        if (requestHasBody) {
            const bodyHasPath = request.body.hasOwnProperty("path")
            if (bodyHasPath) return pathExists(req.body.path)
            else return ("ERROR - invalid request. PATH is missing.")
        }
        else return ("ERROR - invalid request BODY is missing.")
    }
    

module.exports = {
    pathExists:pathExists,
    filesInPath:filesInPath,
    validateFile:validateFile
}