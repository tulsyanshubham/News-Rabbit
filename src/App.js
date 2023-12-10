import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  // constructor(){
  //   document.body.style.backgroundColor = 'rgb(27 26 37)'
  //   document.body.style.color = 'white'
  // }
  const[progress,setProgress]=useState(0)
  const[mode,setMode]=useState('light')

  const size = 9;
  const apiKey = process.env.REACT_APP_NEWS_API1;
  // apiKey = process.env.REACT_APP_NEWS value={value}_API2;
  // apiKey = process.env.REACT_APP_NEWS value={value}_API3;

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(27 26 37)';
      document.body.style.color = 'white';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  let value = '';
  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} value={value}/>
        console.log(value)
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/News-Rabbit" element={<News value={value} mode={mode} setProgress={setProgress} key='' apiKey={apiKey} pageSize={size} category={'general'} title={'general'} />} />

          <Route exact path="/News-Rabbit/business" element={<News value={value} mode={mode} setProgress={setProgress} key='business' apiKey={apiKey} pageSize={size} category={'business'} title={'business'} />} />

          <Route exact path="/News-Rabbit/entertainment" element={<News value={value} mode={mode} setProgress={setProgress} key='entertainment' apiKey={apiKey} pageSize={size} category={'entertainment'} title={'entertainment'} />} />

          <Route exact path="/News-Rabbit/health" element={<News value={value} mode={mode} setProgress={setProgress} key='health' apiKey={apiKey} pageSize={size} category={'health'} title={'health'} />} />

          <Route exact path="/News-Rabbit/science" element={<News value={value} mode={mode} setProgress={setProgress} key='science' apiKey={apiKey} pageSize={size} category={'science'} title={'science'} />} />

          <Route exact path="/News-Rabbit/sports" element={<News value={value} mode={mode} setProgress={setProgress} key='sports' apiKey={apiKey} pageSize={size} category={'sports'} title={'sports'} />} />

          <Route exact path="/News-Rabbit/technology" element={<News value={value} mode={mode} setProgress={setProgress} key='technology' apiKey={apiKey} pageSize={size} category={'technology'} title={'technology'} />} />
          
        </Routes>
      </Router>
    </div>
  )
}
export default App
