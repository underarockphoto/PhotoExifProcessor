const {pathExists,filesInPath,validateFile} = require('../modules/fileManagement')

test('Return true when path exists:',()=>{
    expect(pathExists("./tests/testDirectory")).toBe(true)
})
test('Return false when path exists:',()=>{
    expect(pathExists("./testsPathDoesntExist")).toBe(false)
})
test('Return array of files when path exists:',()=>{
    expect(filesInPath("./tests/testDirectory")).toStrictEqual(["emptyFolder"])
})
test('Return error when path exists:',()=>{
    expect(filesInPath("./tests/testsPathDoesntExist")).toBe("Error fetching files in path.")
})
test('Validate file returns error with invalid request',()=>{
    expect(validateFile({notPath:"path"})).toBe("ERROR - invalid request.  Object has no PATH property.")
})