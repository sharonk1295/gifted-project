import React from 'react';
import '../css/style.scss';
import Form from './Create_Edit_form'

const Recipient = (props) => {
    

    const recipient = props.recipient;

    const [editGift, setEditGift] = React.useState({
        recipient: '',
        gift: '',
        date: '',
        occasion: '',
    })

    const handleSelect = async (recipient) => {
        setEditGift(recipient)
        
    }

    // const formData = {
    //     recipient: '',
    //     gift: '',
    //     date: '',
    //     occasion:''
    //   }

    return (
        <div>
            {editGift.recipient ? <Form handleSubmit={props.handleUpdate} initial={editGift}/> : ''}
            <ul>
                {recipient ? recipient.map((recipient)=> {
                    return(
                        
                        <li key ={recipient._id}>
                            <h1>{recipient.recipient}</h1>
                            <button onClick={()=> {
                            props.handleDelete(recipient._id)
                        }}>Delete</button>
                            <button onClick={() => {
                            handleSelect(recipient)}
                            }
                        >Update</button>
                        </li>
                )})
                : 'loading recipient'}
            </ul>
        </div>
    );
  
    
}



export default Recipient;

