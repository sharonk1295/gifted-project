import React from "react";
import "../css/style.scss";

import Header from './Header';
import Form from './Create_Edit_form';
import History from './Gift_History';
import Recipient from './Recipient';
import Splash from './Splash';

const App = (props) => {

  const [recipients, setRecipients] = React.useState();

  //const [page, setPage] = React.useState()

  // Use to render Form from our navbar
  const [formToggle, setFormToggle] = React.useState(false);
  const addRecipientForm = () => {
    setFormToggle(true);
    setHistoryToggle(false);
    setHomeToggle(false)
  }

  // Use to show gift history
  const [historyToggle, setHistoryToggle] = React.useState(false);
  const showHistory = () => {
    setHistoryToggle(true);
    setFormToggle(false);
    setHomeToggle(false)
  }

  // Home button
  // const [homeToggle, setHomeToggle] = React.useState(true);
  // const showHome = () => {
  //   setHistoryToggle(false);
  //   setFormToggle(false);
  // }

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
  const showPage = () => {
    if (homeToggle) {
      return <Recipient recipient={recipients}/>
  } else if (historyToggle) {
      return <History gifts={recipients}/>
  } else if (formToggle) {
      return <Form initial={blank} handleSubmit={handleCreate}/>
  } else {
      return <Recipient recipient={recipients}/>
    }
  }
  React.useEffect(() => {
    showPage();
  }, []);

  return splash ? <Splash hideSplash={hideSplash} /> : (
    <>
      <Header showForm= {addRecipientForm} showHistory={showHistory} showHome={showHome}/>
      {/* {formToggle ? <Form initial={blank} handleSubmit={handleCreate}/> : 
      ''}
      {historyToggle ? <History gifts={recipients} /> 
      :
      <Recipient recipient={recipients}/>} */}
      {showPage()}
    </>
  )
}

export default App;


