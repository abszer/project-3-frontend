import React,{useState} from 'react'
import axios from 'axios'

const UsersList=({userData})=>{
    

    return(
        <div className="users-container">
            {userData.map((user)=>{
                return(
                <div className="user">
                    <h3>{user.username}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default UsersList