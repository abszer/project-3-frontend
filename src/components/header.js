import React,{useState} from 'react'
import '../Header.css'
import axios from 'axios'
import SignUp from './signUp'
import LogIn from './logIn'

const Header = () => {
     const [loggedIn,setLoggedIn]=useState(false)
     const [signUp,setSignUp]=useState(false)
     const [logIn,setLogIn]=useState(false)

     const userSignUp=()=>{
          setLogIn(false)
          setSignUp(true)
     }

     const userLogIn=()=>{
          setSignUp(false)
          setLogIn(true)
     }



     return(
          <div className="Header">
               <h1>SquadUp</h1>
               {loggedIn?
               null
               :
               <div className="sign-up-log-in">
                    <button onClick={userSignUp}>Sign Up</button>
                    <button onClick={userLogIn}>Log In</button>
               </div>
               }
               {signUp?
               <SignUp setSignUp={setSignUp}/>
               :
               null}
               
               {logIn?
               <LogIn setLogIn={setLogIn}/>
               :
               null}
               
          </div>
     )
}

export default Header