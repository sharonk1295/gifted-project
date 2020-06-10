import React from "react";
import "../css/style.scss";

import Header from './Header';
import Form from './Create_Edit_form';

const App = (props) => {

  const [recipients, setRecipients] = React.useState();

  // Use to render Form from our navbar
  const [formToggle, setFormToggle] = React.useState(false);
  const addRecipientForm = () => {
    setFormToggle(!formToggle);
  }


  const blank = {
    recipient: '',
    gift: '',
    date: '',
    occasion:''
  }

  const getInfo = async () => {
    const response = await fetch('http://localhost:3000/gifts')
    const result = await response.json()
    setRecipients(result);
  }
  
  React.useEffect(() => {
    getInfo();
  }, []);

  const handleCreate =  async (recipient) => {
    const response = await fetch('http://localhost:3000/gifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipient)
    })
    getInfo();
  }

  // const show = () => {
  //   return <Form />
  // }

  return (
    <>
      <Header showForm= {addRecipientForm} />
    </>
  )
}

export default App;
