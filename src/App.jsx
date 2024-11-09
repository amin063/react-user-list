import React, { useState } from 'react'
import Form from './components/Form'
import Users from './components/users'
import './app.css'

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div className='container'>
      <Form
        userList={userList}
        setUserList={setUserList}
      />
      <Users
        userList={userList}
        setUserList={setUserList}
      />
    </div>
  )
}

export default App