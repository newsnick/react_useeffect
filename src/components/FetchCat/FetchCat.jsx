import React, { useState, useEffect } from 'react'
import styles from './FetchCat.module.css'

function FetchCat() {
  const [catImage, setCatImage] = useState(null)

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const json = await response.json()
      setCatImage(json[0].url)
    }

    fetchCatImage()
  }, [])

  return (
    <div className={styles.image}>
      {catImage ? <img src={catImage} alt="Random cat" /> : <p>Loading...</p>}
    </div>
  )
}

export default FetchCat
