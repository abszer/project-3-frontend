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
        {/* attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </div>
    </div>
  )
}

export default App;
