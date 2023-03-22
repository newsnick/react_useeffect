import React, { useEffect } from 'react'

function MountMessage() {
  useEffect(() => {
    console.log('Component mounted!')
    return () => {
      console.log('Component unmounted!')
    }
  }, [])

  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

export default MountMessage
