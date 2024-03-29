import { useState } from "react"

const Authenticate = ({token}) => {
  const API_URL = `https://fsa-jwt-practice.herokuapp.com/authenticate`

  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleClick = async () =>{
    try{
      const apiResponse = await fetch(API_URL,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    })
    const jsonObject = await apiResponse.json()
    
    setSuccessMessage(jsonObject.message)
    }catch (error){
      setError(error.message)
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      <p>{successMessage ? successMessage : null}</p>
      <p>{error ? error : null}</p>
      <button onClick={handleClick}>Authenticate User Token</button>
    </>
  )
}

export default Authenticate