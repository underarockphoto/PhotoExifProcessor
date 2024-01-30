import logo from './logo.png';
import './App.css';
import React,{useState} from "react"

function App() {

  const [photoDirectory,setPhotoDirectory] = useState("")

  const [files,setFiles] = useState([])

  const getServer = async (e) =>{


      const requestObject = {path:photoDirectory}
   
      fetch(`http://localhost:4000/filesInPath`,{
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(requestObject)
      })
      .then(res=>res.json())
      .then(res=>{
        console.log(res.files)

        setFiles(res.files)
      })
      .catch(error => {
       console.log(error);
        return;
      });


    
  }

  

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
      <div>Found {files.length} files.</div>
      <div>Files:</div>
      <div>{listOfFiles}</div>
    </div>
  );
}

export default App;
