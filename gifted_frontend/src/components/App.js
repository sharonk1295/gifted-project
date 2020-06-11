import React from "react";
import "../css/style.scss";

import Header from './Header';
import Form from './Create_Edit_form';
import History from './Gift_History';
import Recipient from './Recipient';

const App = (props) => {

  const [recipients, setRecipients] = React.useState();

  //const [page, setPage] = React.useState()

  // Use to render Form from our navbar
  const [formToggle, setFormToggle] = React.useState(false);
  const addRecipientForm = () => {
    setFormToggle(!formToggle);
    setHistoryToggle(!historyToggle)
  }

  // Use to show gift history
  const [historyToggle, setHistoryToggle] = React.useState(false);
  const showHistory = () => {
    setHistoryToggle(!historyToggle);
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


  return (
    <>
      <Header showForm= {addRecipientForm} showHistory={showHistory}/>
      {formToggle ? <Form initial={blank} handleSubmit={handleCreate}/> : 
      ''}
      {historyToggle ? <History gifts={recipients} /> 
      :
      <Recipient recipient={recipients}/>}
    </>
  )
}

export default App;


