import React,{useState} from 'react'
import axios from 'axios'
import '../UpdateCard.css'


const UpdateCard=({setUpdateFormHidden})=>{

    const [newUsername, setNewUsername] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newImageURL, setNewImageURL] = useState('')

    const handleUsernameOnChange = (e) => {
        setNewUsername(e.target.value)
   }

   const handleDescriptionOnChange = (e) => {
        setNewDescription(e.target.value)
   }

   const handleImageURLOnChange = (e) => {
        setNewImageURL(e.target.value)
   }

    const handleUpdate=(e)=>{
        e.preventDefault()
        
    }

    return(
        <div className='update-card'>
            <h3>Update</h3>
            <form onSubmit={handleUpdate} className='update-card-form'>


            </form>
        </div>
    )
}

export default UpdateCard