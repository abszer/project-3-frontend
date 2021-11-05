import React,{useState} from 'react'
import axios from 'axios'
import UpdateCard from './updateCard'



const Card = ({ card,setCardsData }) => {

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
               {updateFormHidden? <UpdateCard setUpdateFormHidden={setUpdateFormHidden} card={card} setCardsData={setCardsData}/> :<img src={card.image} onClick={showUpdate}/>}
               
               <h3>{card.description}</h3>
               <button onClick={handleDelete}>Close Request</button>
          </div>
     )
}


export default Card