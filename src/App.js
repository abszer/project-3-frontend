import React, {useState, useEffect} from 'react'
import Header from './components/header.js'
import './App.css'
import addSvg from './add.png'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="addSvg-container">
        <img src={addSvg} className="add-svg" alt="add" onClick={() => {alert('add button clicked')}}/>
      </div>
    </div>
  )
}

export default App;
