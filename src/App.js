import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/header.js'
import AddCard from './components/addCard'
import Card from './components/card'
import './App.css'
import addSvg from './add.png'

const App = () => {

  const [cardList, setCardList] = useState([])
  const [addBtnHidden, setAddBtnHidden] = useState(false)
  const [cardsData, setCardsData] = useState([])

  const handleAddButtonClick = (e) => {
    setAddBtnHidden(true)
    // setCardList(cardList.concat(<Card key={cardList.length} />))
  }
  
  const handleCardSubmit = () => {
    setAddBtnHidden(false)
    axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
      setCardsData(response.data)
    })
  }

  useEffect(() => {
    axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
      setCardsData(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className="addSvg-container">
        <img src={addSvg} className={addBtnHidden ? 'hide' : 'add-svg'} alt="add" onClick={handleAddButtonClick}/>
        {/* attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        {addBtnHidden ? <AddCard handleCardSubmit={handleCardSubmit}/> : null}      
      </div>
      <div className="card-container">
        {
          cardsData.map((card) => {
            return (
              <Card className="card" card={card} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
