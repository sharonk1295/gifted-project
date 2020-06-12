import React from 'react';
import '../css/style.scss';

const History = (props) => {

    const gift = props.gifts;

    return (
        <div className="gift-history">
            <h1>View the Gifts You've Ever Given</h1>
            <ol>
                {gift ? gift.map((gift)=> {
                    return(
                        <li key ={gift._id}>
                            <h2>{gift.gift}</h2>
                            <h5>Given to {gift.recipient} on {gift.date} for {gift.occasion}</h5>
                        </li>
                    )
                }): 'loading gifts'}
            </ol>
        </div>
    );
  
    
}



export default History;