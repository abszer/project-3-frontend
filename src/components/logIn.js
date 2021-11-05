import React,{useState} from 'react'
import axios from 'axios'
import '../LogIn.css'


const LogIn=(props)=>{
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
        }).then((response)=>{
            props.passUsernameUp(response.data.username)
        })
        props.setLogIn(false)
    }

    return(
        <div className="log-in">
            <form autoComplete="off" onSubmit={handleLogIn}>
                Username:<input type='text' name="username" onChange={handleNewUsername}/>
                Password:<input type='password' name="password" onChange={handleNewPassword}/><br/>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn