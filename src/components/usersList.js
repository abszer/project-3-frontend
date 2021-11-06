import React,{useState} from 'react'
import axios from 'axios'
import '../Users.css'

const UsersList=({userData})=>{
    

    return(
        <div className="users-container">
            {userData.map((user)=>{
                return(
                
                    <h3>{user.username}</h3>
                
                )
            })}
        </div>
    )
}

export default UsersList