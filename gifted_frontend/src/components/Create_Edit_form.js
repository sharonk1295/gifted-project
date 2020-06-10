import React from 'react'

const Form = (props) => {
    const [formData, setFormData] = React.useState(props.initial)

    React.useEffect(() => {
        setFormData(props.initial)
    }, [props.initial])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <form onSubmit={() => {props.handleSubmit(formData)}}>
            <input 
            type="text" 
            name="recipient" 
            value={formData.recipient} 
            onChange={handleChange}/>
            <input 
            type="text" 
            name="gift" 
            value={formData.gift} 
            onChange={handleChange}/>
            <input 
            type="text" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}/>
            <input 
            type="text" 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange}/>
            <input type="submit"></input>
        </form>
    )
}

export default Form