import logo from './logo.png';
import './App.css';
import React,{useState} from "react"

function App() {

  const [photoDirectory,setPhotoDirectory] = useState("")
  const getServer = async () =>{
    const id = photoDirectory
    fetch(`http://localhost:4000/pathExists/${photoDirectory}`)
    .then(res=>res.json())
    .then(res=>console.log(res))
  }
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
            <input type='text' name="photoDirectory" onChange={(e)=>setPhotoDirectory(e.target.value)}/>
            <button class="refresh" onClick={()=>getServer()}>Refresh</button>
          </div>
          <div id="jsonOutputInputContainer">
            
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
