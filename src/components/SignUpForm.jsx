import { useState } from "react"

const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(username.length<8){
      alert('Please make your username at least 8 charcters')
      return
    }
    const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`
    try{
      const apiResponse = await fetch(API_URL,
        {
          method: 'POST',
          headers: { 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
      const jsonObject = await apiResponse.json()
      console.log(jsonObject)
      setToken(jsonObject.token)
    }catch (error){
      setError(error.message)
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      <p>{error ? {error} : null}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => {setUsername(e.target.value)}} />
        </label> <br />

        <label>
          Password:  <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </label> <br />

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm