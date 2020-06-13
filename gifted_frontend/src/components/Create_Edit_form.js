import React from 'react'
import "../css/style.scss";

const Form = (props) => {
    const [formData, setFormData] = React.useState(props.initial)

    React.useEffect(() => {
        setFormData(props.initial)
    }, [props.initial])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <div className="add-form">
            <h2>Who Will You Be Gifting Next?</h2>
            <form 
            // onSubmit={() => {props.handleSubmit(formData)}} 
            className="form">
                <label>Recipient</label>
                <input 
                type="text" 
                name="recipient" 
                value={formData.recipient} 
                onChange={handleChange}/>
                <label>Gift</label>
                <input 
                type="text" 
                name="gift" 
                value={formData.gift} 
                onChange={handleChange}/>
                <label>Date</label>
                <input 
                type="text" 
                name="date" 
                value={formData.date} 
                onChange={handleChange}/>
                <label>Occasion</label>
                <input 
                type="text" 
                name="occasion" 
                value={formData.occasion} 
                onChange={handleChange}/>
                {/* <input onClick={props.handleCreate(formData)} type="submit"></input> */}
                <button
                    onClick={() => {
                        props.handleSubmit(formData);
                        // setFormData(props.initial);
                    }}
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Form