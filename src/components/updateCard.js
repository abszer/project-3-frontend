import React,{useState} from 'react'
import axios from 'axios'
import '../UpdateCard.css'


const UpdateCard=({setUpdateFormHidden,card,setCardsData, showUsers, user })=>{

    const [newUsername, setNewUsername] = useState(card.name)
    const [newDescription, setNewDescription] = useState(card.description)
    const [newImageURL, setNewImageURL] = useState(card.image)
    const [newPlayer, setNewPlayer] = useState('')

    const handleUsernameOnChange = (e) => {
        setNewUsername(e.target.value)
   }

   const handleDescriptionOnChange = (e) => {
        setNewDescription(e.target.value)
   }

   const handleImageURLOnChange = (e) => {
        setNewImageURL(e.target.value)
   }

   const handleNewPlayerOnChange = (e) => {
       setNewPlayer(e.target.value)
   }


    const handleUpdate=(e)=>{
        e.preventDefault()
        setUpdateFormHidden(false)
        axios.put(`https://squadupgames.herokuapp.com/games/${card._id}`,{
            name: newUsername,
            description: newDescription,
            image: newImageURL
        }).then((response=>{
            axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
                setCardsData(response.data)
               })
        }))
    }

    const handleAddUsername = (e) => {
        e.preventDefault()
        setUpdateFormHidden(false)
        if(newPlayer !== ""){
            axios.put(`https://squadupgames.herokuapp.com/games/${card._id}`,{
            players: newPlayer
        }).then((response=>{
            axios.get("https://squadupgames.herokuapp.com/games").then((response) => {
                setCardsData(response.data)
               })
        }))
        }
    }

    if(user === card.user){
        return(
            <div className='update-card'>
                <h3>Update</h3>
                <form onSubmit={handleUpdate} className='update-card-form'>
                    Username: <input type="text" name="name" value={newUsername} onChange={handleUsernameOnChange}/><br/>
                    Request: <input type="text" name="description" value={newDescription} onChange={handleDescriptionOnChange}/><br/>
                    Image URL: <input type="text" name="image" value={newImageURL} onChange={handleImageURLOnChange}/><br/>
                    
                    <button>Submit</button>
    
                </form>
            </div>
        )
    }
    if(user && user !== card.user){
        return(
            <div className='update-card'>
                <h3>Add Username</h3>
                <form onSubmit={handleAddUsername} className="add-username-form">
                <h5>Players:</h5>
                {
                    card.players ? 
                    card.players.map((player) => {
                        return (
                            <h5>{player}</h5>
                        )
                    }) : null
                }
                    <input type="text" name="players" onChange={handleNewPlayerOnChange} placeholder="Your Username"/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }else{
        return <img src={card.image} />
    }
    
    
}

export default UpdateCard