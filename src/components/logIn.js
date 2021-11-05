import React,{useState} from 'react'
import axios from 'axios'


const LogIn=({setLogIn})=>{
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()

    const handleNewUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleNewPassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleLogIn =(e)=>{
        e.preventDefault()
        axios.post(`https://squadupgames.herokuapp.com/user/login`,
        {
            username:username,
            password,password
        }).then(()=>{
            alert("Welcome, "+username+"!")
        })
        setLogIn(false)
    }

    return(
        <div>
            <form onSubmit={handleLogIn}>
                Username:<input type='text' name="username" onChange={handleNewUsername}/>
                Password:<input type='text' name="password" onChange={handleNewPassword}/>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn