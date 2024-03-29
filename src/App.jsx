import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

const App = () => {
  const [token, setToken] = useState(null)
  return (
    <>
      <h1>Ultimate React Forms</h1>
      <div>
        <Authenticate token={token} setToken={setToken} />
      </div>
      <div>
        <SignUpForm token={token} setToken={setToken} />
      </div>
    </>
  )
}

export default App
