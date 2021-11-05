import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/header.js'
import SignUp from './components/signUp'
import LogIn from './components/logIn'
import AddCard from './components/addCard'
import Card from './components/card'
import './App.css'
import addSvg from './add.png'
import UsersList from './components/usersList.js'


const App = () => {

  // const [cardList, setCardList] = useState([])
  const [addBtnHidden, setAddBtnHidden] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [userData,setUserData]=useState([])
  const [signUp,setSignUp]=useState(false)
  const [logIn,setLogIn]=useState(false)

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

  const handleCardClick=(event)=>{
    console.log(event.target);
  }

  const handleUpdateUserSession = (username) => {
    setCurrentUser(username)
    console.log(username + " has been passed up to the app component")
  }

  // SignUp LogIn Functions

  const handleSignUpOnClick = (event) => {
    setLogIn(false)
    setSignUp(true)
  }

  const handleLogInOnClick = (event) => {
    setSignUp(false)
    setLogIn(true)
  }

  useEffect(() => {
    axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
      setCardsData(response.data)
      console.log(response.data)
    })
    axios.get(`https://squadupgames.herokuapp.com/user/`).then((response)=>{
      setUserData(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header handleLogInOnClick={handleLogInOnClick} handleSignUpOnClick={handleSignUpOnClick} handleUpdateUserSession={handleUpdateUserSession}/>
      {
          signUp?
          <SignUp setSignUp={setSignUp}/>
          :
          null
      }
               
      {
          logIn?
          <LogIn passUsernameUp={handleUpdateUserSession} setLogIn={setLogIn}/>
          :
          null
      }
               
      <UsersList userData={userData}/>
      {
        currentUser ? 
        <div className="addSvg-container">
        <img src={addSvg} className={addBtnHidden ? 'hide' : 'add-svg'} alt="add" onClick={handleAddButtonClick}/>
        {/* attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        {addBtnHidden ? <AddCard user={currentUser} handleCardSubmit={handleCardSubmit}/> : null}      
      </div> : 
        null
      }
      <div className="card-container">
        {
          cardsData.map((card) => {
            return (
              <Card className="card" card={card} user={currentUser} setCardsData={setCardsData}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
