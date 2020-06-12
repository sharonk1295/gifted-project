import React from "react";
import "../css/style.scss";

import Header from './Header';
import Form from './Create_Edit_form';
import History from './Gift_History';
import Recipient from './Recipient';
import Splash from './Splash';

const App = (props) => {

  const [recipients, setRecipients] = React.useState();
  const [editedRecipient, setEditRecipients] = React.useState({
    recipient: '',
    gift: '',
    date: '',
    occasion:''
});



  // Use to render Form from our navbar
  const [formToggle, setFormToggle] = React.useState(false);
  const addRecipientForm = () => {
    setFormToggle(true);
    setHistoryToggle(false)
    setHomeToggle(false);
  }

  // Use to show gift history
  const [historyToggle, setHistoryToggle] = React.useState(false);
  const showHistory = () => {
    setHistoryToggle(true);
    setFormToggle(false);
    setHomeToggle(false)
  }

  // For testing splash
  const [homeToggle, setHomeToggle] = React.useState(false);
  const showHome = () => {
    setHomeToggle(true);
    setHistoryToggle(false);
    setFormToggle(false);
  }

  // For Splash page
  const [splash, setSplash] = React.useState(true);
  const hideSplash = () => {
    setSplash(false);
    setHomeToggle(true)
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

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/gifts/${id}`, {
      method: 'DELETE'
    })
    getInfo()
  }

  const handleUpdate = async (data)  => {
    console.log(data)
    const response = await fetch(`http://localhost:3000/gifts/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // getInfo();
  }

  // const updateData = {
  //   recipient: '',
  //   gift: '',
  //   date: '',
  //   occasion:''
  // }

  return splash ? <Splash hideSplash={hideSplash} /> : (
    <>
      <Header showForm= {addRecipientForm} showHistory={showHistory} showHome={showHome}/>
      {formToggle ? <Form initial={blank} handleSubmit={handleCreate}/> : ''}
      {historyToggle ? <History gifts={recipients}/>
      :
      homeToggle? <Recipient recipient={recipients} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : ''}
    </>
  )
}

export default App;