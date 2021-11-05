import React,{useState} from 'react'
import '../Header.css'
import axios from 'axios'

const Header = (props) => {
     const [loggedIn,setLoggedIn]=useState(false)

     return(
          <div className="Header">
               <h1>SquadUp</h1>
               {
               loggedIn ?
               null
               :
               <div className="sign-up-log-in">
                    <button onClick={props.handleSignUpOnClick}>Sign Up</button>
                    <button onClick={props.handleLogInOnClick}>Log In</button>
               </div>
               }
          </div>
     )
}

export default Header