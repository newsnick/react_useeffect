import React, { useState, useEffect } from 'react'
import styles from './FetchImage.module.css'

function FetchImage() {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch('https://picsum.photos/200')
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setImageSrc(url)
    }

    getRandomImage()
  }, [])

  return (
    <div>
      <img className={styles.imgrandom} src={imageSrc} alt="Random" />
    </div>
  )
}

export default FetchImage
