import React, { useState } from 'react'
import Axios from 'axios'

const Temp = () => {
  const [polarity, setPolarity] = useState("")
  const [suggested, setSuggested] = useState("")
  Axios.get("http://localhost:3001/").then(res => {
    console.log(res);
    setPolarity(res.data.topics[0].sentiment.polarity.score);
    setSuggested(res.data.topics[0].sentiment.suggested);
  })

  return (
    <>
      <div>
        {polarity}
      </div>
      <div>
        {suggested}
      </div>
    </>
  )
}

export default Temp