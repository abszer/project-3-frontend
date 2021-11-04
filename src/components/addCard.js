import React, {useState} from "react"
import axios from 'axios'
import '../AddCard.css'

const AddCard = (props) => {
     
     const [newUsername, setNewUsername] = useState('')
     const [newDescription, setNewDescription] = useState('')
     const [newImageURL, setNewImageURL] = useState('')
     const [newRating, setNewRating] = useState(0)

     const handleUsernameOnChange = (e) => {
          setNewUsername(e.target.value)
     }

     const handleDescriptionOnChange = (e) => {
          setNewDescription(e.target.value)
     }

     const handleImageURLOnChange = (e) => {
          setNewImageURL(e.target.value)
     }

     const handleAddCardOnSubmit = (e) => {
          e.preventDefault()
          axios.post('https://squadupgames.herokuapp.com/games', 
          {
               name: newUsername,
               description: newDescription,
               image: newImageURL,
               rating: newRating
          })
          alert('card was submitted')
          props.handleCardSubmit()
     }

     return (
          <div className="add-card">
               <h3>New Squad Request</h3>
               <form autoComplete="off" onSubmit={handleAddCardOnSubmit} className="add-card-form">
                    Username: <input type="text" name="name" onChange={handleUsernameOnChange}/><br/>
                    Request: <input type="text" name="description" onChange={handleDescriptionOnChange}/><br/>
                    Image URL: <input type="text" name="image" onChange={handleImageURLOnChange}/><br/>
                    <button>Submit</button>
               </form>
          </div>
     )
}


export default AddCard;