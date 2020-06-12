import React from 'react';
import '../css/style.scss';

const History = (props) => {

    const gift = props.gifts;

    return (
        <div className="gift-history">
            <h2>View the Gifts You've Ever Given</h2>
            <ul>
                {gift ? gift.map((gift)=> {
                    return(
                        <li key ={gift._id}>
                            <h1>{gift.gift}</h1>
                            <h5>Given to {gift.recipient} on {gift.date} for {gift.occasion}</h5>
                        </li>
                    )
                }): 'loading gifts'}
            </ul>
        </div>
    );
  
    
}



export default History;