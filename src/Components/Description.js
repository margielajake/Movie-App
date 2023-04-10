import React from 'react'
import { useNavigate } from 'react-router-dom'


const Description = ({ title, description, trailer }) => {

  const navigate = useNavigate()

  return (
    <>
      <button onClick ={ () => navigate(-1)}> Back to Home</button>
      <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe src={trailer} />
    </div>
      
    </>
  
  
  ) 
}


  
  
export default Description