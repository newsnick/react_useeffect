import React, { useState, useEffect } from 'react'

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null)

  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1
    setRandomNumber(number)
  }, [])

  return (
    <div>
      <p>Generated number: {randomNumber}</p>
    </div>
  )
}

export default RandomNumber
