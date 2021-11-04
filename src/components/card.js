import React from 'react'

const Card = ({ card }) => {
     return(
          <div className="card">
               <h4>{card.name}</h4>
               <img src={card.image} />
               <h3>{card.description}</h3>
          </div>
     )
}


export default Card