import React, { useEffect } from 'react'

function CurrentTime() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(new Date())
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <></>
}

export default CurrentTime
