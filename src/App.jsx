import './App.css'
import Navbar from './components/Navigationbar'
import LogInStatus from './context/LogInStatusContext'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("userInfo"));

  return (
    <LogInStatus.Provider value={[loggedIn, setLoggedIn]}>
      <Navbar fixed="top">
      </Navbar>
    </LogInStatus.Provider>   
  )
}

export default App
