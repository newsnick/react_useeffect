import React, { useState, useEffect } from 'react'
import styles from './FetchApi.module.css'

function FetchData() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      const json = await response.json()
      setData(json)
      console.log(json)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.fetchedapi}>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  )
}

export default FetchData
