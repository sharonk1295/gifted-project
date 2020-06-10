import React from 'react';
import '../css/style.scss';

const History = (props) => {
    const [ formData, setFormData] = React.useState(props.initial);
    
    React.useEffect(() => {
        setFormData(props.initial);
    }, [props.initial]);

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

