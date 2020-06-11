import React from 'react';
import '../css/style.scss';

const Recipient = (props) => {

    const recipient = props.recipient;

    return (
        <div>
            <ul>
                {recipient ? recipient.map((recipient)=> {
                    return(
                        <li key ={recipient._id}>
                            <h1>{recipient.recipient}</h1>
                        </li>
                    )
                }): 'loading recipient'}
            </ul>
        </div>
    );
  
    
}



export default Recipient;

