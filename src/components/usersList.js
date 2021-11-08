import React,{useState} from 'react'
import axios from 'axios'
import '../Users.css'

const UsersList=({userData})=>{
   
   const colorsArr = ['blue', 'orange', 'pink', 'green', 'yellow']; 

    return(
        <div className="users-container">
            {userData.map((user)=>{
                // const randColor = colorsArr[Math.floor(Math.random() * colorsArr.length)]

                return(
                
                    <h3 className={null}>{user.username}</h3>
                
                )
            })}
        </div>
    )
}

export default UsersList