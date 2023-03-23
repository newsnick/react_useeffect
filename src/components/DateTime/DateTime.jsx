import React, { useState, useEffect } from 'react'

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>{dateTime.toString()}</p>
    </div>
  )
}

export default DateTime
