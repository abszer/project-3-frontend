import React,{useState} from 'react'
import axios from 'axios'
import '../SignUp.css'


const SignUp=({setSignUp})=>{
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()

    const handleNewUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleNewPassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSignUp =(e)=>{
        e.preventDefault()
        axios.post(`https://squadupgames.herokuapp.com/user/new`,
        {
            username:username,
            password,password
        }).then(()=>{
            alert("user created!")
        })
        setSignUp(false)
    }

    return(
        <div className="sign-up">
            <form onSubmit={handleSignUp}>
                Username:<input type='text' name="username" onChange={handleNewUsername}/>
                Password:<input type='text' name="password" onChange={handleNewPassword}/>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUp