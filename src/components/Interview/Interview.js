import React, { useState } from 'react'
import Axios from 'axios'
import Cam from './Cam'

const Interview = () => {
  const [polarity, setPolarity] = useState("")
  const [suggested, setSuggested] = useState("")
  Axios.get("http://localhost:3001/").then(res => {
    console.log(res);
    setPolarity(res.data.topics[0].sentiment.polarity.score);
    setSuggested(res.data.topics[0].sentiment.suggested);
  })

  return <Cam />
  
}

export default Interview