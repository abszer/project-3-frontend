import React, {useState, useEffect} from 'react'
import Header from './components/header.js'
import './App.css'
import addSvg from './iconmonstr-plus-circle-thin.svg'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="addSvg-container">
        <img src={addSvg} className="add-svg" alt="add" />
      </div>
    </div>
  )
}

export default App;
