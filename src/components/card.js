import React from 'react'
import axios from 'axios'

const Card = ({ card,setCardsData }) => {
     const handleDelete=()=>{
          axios.delete(`https://squadupgames.herokuapp.com/games/${card._id}`).then((response)=>{
               axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
                    setCardsData(response.data)
               })
          })
     }
     return(
          <div className="card">
               <h4>{card.name}</h4>
               <img src={card.image} />
               <h3>{card.description}</h3>
               <button onClick={handleDelete}>Close Request</button>
          </div>
     )
}


export default Card