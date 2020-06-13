import React from 'react';
import '../css/style.scss';

const History = (props) => {

    const gift = props.gifts;

    return (
        <div className="gift-history">
            <h1>View All the Gifts You've Ever Given</h1>
            <ol>
                {gift ? gift.map((gift)=> {
                    return(
                        <li key ={gift._id}>
                            <h2>{gift.gift}</h2>
                            <h5>Given to {gift.recipient} on {gift.date} for {gift.occasion}</h5>
                        </li>
                    )
                {/* {gift ? gift.map((gift)=> {
                    return(
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-header">
                                <h2>{gift.gift}</h2>
                            </div>
                            <ul key ={gift._id} className="list-group">
                                <li className="list-group-item">
                                    <h5>To:  {gift.recipient}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>On: {gift.date}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>Reason: {gift.occasion}</h5>
                                </li>
                            </ul>  
                        </div>  */}
                }): 'loading gifts'}
            </ol>
        </div>
    );
  
    
}



export default History;