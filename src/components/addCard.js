import react from "react"
import axios from 'axios'

const AddCard = (props) => {

     const handleAddCardOnSubmit = (e) => {
          e.preventDefault()
          alert('card was submitted')
          props.handleAddBtnVisible()
     }

     return (
          <div className="add-card">
               <form onSubmit={handleAddCardOnSubmit}>
                    Name: <input type="text" name="name"/><br/>
                    Request: <input type="text" name="description"/><br/>
                    Image: <input type="file" name="image"/><br/>
                    <button>Submit</button>
               </form>
          </div>
     )
}


export default AddCard;