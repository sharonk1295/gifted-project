import React from "react";
import "../css/style.scss";
// import Form from '../components/Create_Edit_form'

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
    setFormToggle(true);
    setHistoryToggle(false)
    setHomeToggle(false);
  }

  // Use to show gift history
  const [historyToggle, setHistoryToggle] = React.useState(false);
  const showHistory = () => {
    setHistoryToggle(true);
    setFormToggle(false)
    setHomeToggle(false);
  }

  // Home button
  const [homeToggle, setHomeToggle] = React.useState(true);
  const hideHome = () => {
    setHomeToggle(true);
    setFormToggle(false);
    setHistoryToggle(false)
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


  // const showPage = () => {
  //   if (homeToggle) {
  //     setFormToggle(formToggle === false);
  //     setHistoryToggle(historyToggle ===false);
  //     return <Recipient recipient={recipients}/>
  // } else if (historyToggle) {
  //     setHomeToggle(homeToggle ===false);
  //     setFormToggle(formToggle ===false);
  //     return <History gifts={recipients}/>
  // } else if (formToggle) {
  //     setHomeToggle(homeToggle ===false);
  //     setHistoryToggle(historyToggle === false);
  //     return <Form initial={blank} handleSubmit={handleCreate}/>
  // } else {
  //     return <Recipient recipient={recipients}/>
  //   }
  // }
  // React.useEffect(() => {
  //   showPage();
  // }, []);

  return (
    <>
      <Header showForm= {addRecipientForm} showHistory={showHistory} hideHome={hideHome}/>
      {formToggle ? <Form initial={blank} handleSubmit={handleCreate}/> : 
      ''}
      {historyToggle ? <History gifts={recipients}/> 
      :
      homeToggle? <Recipient recipient={recipients} handleDelete={handleDelete}/> : ''}
      {/* {showPage()} */}
      {/* {(() => {
        if (homeToggle) {
          setFormToggle(formToggle === false);
          setHistoryToggle(historyToggle ===false);
          return <Recipient recipient={recipients}/>
      } else if (historyToggle) {
          setHomeToggle(homeToggle ===false);
          setFormToggle(formToggle ===false);
          return <History gifts={recipients}/>
      } else if (formToggle) {
          setHomeToggle(homeToggle ===false);
          setHistoryToggle(historyToggle === false);
          return <Form initial={blank} handleSubmit={handleCreate}/>
      } else {
          return <Recipient recipient={recipients}/>
        }
      })()} */}
    </>
  )
}

export default App;


