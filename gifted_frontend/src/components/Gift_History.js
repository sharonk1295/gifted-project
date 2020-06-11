import React from 'react';
import '../css/style.scss';

const History = (props) => {

    const gift = props.gifts;

    return (
        <div>
            <ul>
                {gift ? gift.map((gift)=> {
                    return(
                        <li key ={gift._id}>
                            <h1>{gift.gift}</h1>
                        </li>
                    )
                }): 'loading gifts'}
            </ul>
        </div>
    );
  
    
}



export default History;

