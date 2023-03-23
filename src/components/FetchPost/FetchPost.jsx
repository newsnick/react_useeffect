import React, { useState, useEffect } from 'react'
import styles from './FetchPost.module.css'

function FetchPost() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setData(data.slice(0, 5))
    }

    fetchData()
  }, [])

  return (
    <div>
      <h5>Posts</h5>
      <ul className={styles.ul}>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchPost
