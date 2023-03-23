import React, { useState, useEffect } from 'react'
import styles from './ToggleBackground.module.css'

function ToggleBackground() {
  const [greyMode, setGreyMode] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.backgroundColor = greyMode ? '#333' : '#fff'
  }, [greyMode])

  return (
    <div>
      <button
        className={styles.bgbutton}
        onClick={() => setGreyMode(!greyMode)}
      >
        click here for grey background
      </button>
    </div>
  )
}

export default ToggleBackground
