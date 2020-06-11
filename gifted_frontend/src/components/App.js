import React from "react";
import "../css/style.scss";
import Form from '../components/Create_Edit_form'

import Header from './Header';

const App = (props) => {
  const [form, setForm] = React.useState(null)
  const [recipient, setRecipient] = React.useState(null)

  const getRecipients = async() => {
    const response = await fetch('http://localhost:3000/gifts')
  }
  
  return (
    <>
      <Header />

    </>
  )
}

export default App;
