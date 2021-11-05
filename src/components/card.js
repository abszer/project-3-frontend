import React,{useState, useEffect} from 'react'
import axios from 'axios'
import UpdateCard from './updateCard'



const Card = ({ card, setCardsData, user }) => {

     const [updateFormHidden,setUpdateFormHidden]=useState(false)

     const handleDelete=()=>{
          axios.delete(`https://squadupgames.herokuapp.com/games/${card._id}`).then((response)=>{
               axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
                    setCardsData(response.data)
               })
          })
     }

     const showUpdate=()=>{
          setUpdateFormHidden(true)
     }


     return(
          <div className="card">
               <h4>{card.name}</h4>

               {updateFormHidden && user === card.user ? <UpdateCard setUpdateFormHidden={setUpdateFormHidden} card={card} setCardsData={setCardsData}/> :<img src={card.image} onClick={showUpdate}/>}
               
               <h3>{card.description}</h3>
               {
                    user === card.user ?
                    <button onClick={handleDelete}>Close Request</button> : null
               }
          </div>
     )
}


export default Card