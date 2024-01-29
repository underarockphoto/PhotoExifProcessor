import logo from './logo.png';
import './App.css';
import React,{useState} from "react"

function App() {
  let timing = true;
  const [photoDirectory,setPhotoDirectory] = useState("")
  const formatInput = (input)=>{return '{"'+input+'"}'}
  const [files,setFiles] = useState([])
const [filesExist,setFilesExist] = useState(false)
const [pathReturned,setPathReturned] = useState("")
  const getServer = async () =>{
    if (serverStatus === "Healthy"){
      const id = formatInput(photoDirectory)
      timing = false;
      console.log(id)
      fetch(`http://localhost:4000/fileExists/${id}`)
      .then(res=>res.json())
      .then(res=>{
        setPathReturned(res.path)
        setFiles(res.files)
        setFilesExist(res.exists.toString())
      })
    }else{
      console.log("Server unable to be reached.")
    }
    
  }
const [serverStatus,setServerStatus] = useState("Connecting...")
  setInterval(()=>{
    fetch('http://localhost:4000/')
    .then(res=>res.json())
    .then(res=>{
      if(res.object && res.object==='Hello World!') setServerStatus("Healthy")
      else setServerStatus ("Connecting")
    })
    .catch(err=>setServerStatus("Server error, see console."))
  },5000)

  const listOfFiles = files.map((file)=><div>{file}</div>)
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="projectControls">
          <div id="navMenu" >
            <div className="subMenu">
              <button className="topButton" >
                File
              </button>
              <button className="subNav">New Project</button>
              <button className="subNav">Edit Project</button>
              <button className="subNav">Save Project</button>
            </div>
            <div className="subMenu">
            <button  className="topButton">Edit</button>
            <button className="subNav">Preferences</button>
            </div>
            <div className="subMenu">
            <button  className="topButton">Options</button>
            </div>
            <div className="subMenu">
            <button  className="topButton">Help</button>
            <button className="subNav">Help</button>
            <button className="subNav">Feedback</button>
            <button className="subNav">About</button>
            </div>
          </div>
          <div id="imgDirectoryInputContainer">
            <div className="label">Directory of Images: </div>
            <input type='text' name="photoDirectory" onChange={(e)=>setPhotoDirectory(e.target.value)}
          //   onKeyUp = {()=>{
          //       clearTimeout(typingTimer)
          //       timing = true;
          //       typingTimer = setTimeout(()=>{if (timing) getServer()},doneTypingInterval)
          //   }}
          //   onKeyDown = {()=>{
          //     clearTimeout(typingTimer)
          // }}
            />
            <button class="refresh" onClick={()=>getServer()}>Refresh</button>
          </div>
          <div id="jsonOutputInputContainer">
            
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>Server Status: {serverStatus}</div>
      <div>Filepath: {pathReturned}</div>
      <div>FilesExist: {filesExist}</div>
      <div>Files:</div>
      <div>{listOfFiles}</div>
    </div>
  );
}

export default App;
