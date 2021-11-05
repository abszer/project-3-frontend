import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UsersList=()=>{
    const [userData,setUserData]=useState([])
    
    useEffect(() => {
        axios.get(`https://squadupgames.herokuapp.com/user/`).then((response)=>{
        setUserData(response.data)
        })
      }, [])
    

    return(
        <div className="users-container">
            {userData.map((user)=>{
                <div className="user">
                    <h3>user.username</h3>
                </div>
            })}
        </div>
    )
}

export default UsersList