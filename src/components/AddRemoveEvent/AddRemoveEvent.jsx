import React, { useEffect } from 'react'
import styles from './AddRemoveEvent.module.css'

function AddRemoveEvent() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(`Keydown: ${event.key}`)
    }

    const handleKeyUp = (event) => {
      console.log(`Keyup: ${event.key}`)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return <div className={styles.keyfield}>Press a key here and check log.</div>
}

export default AddRemoveEvent
