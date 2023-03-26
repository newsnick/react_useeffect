import React, { useState, useEffect } from 'react'
import styles from './SetFetchData.module.css'

function DataFetcher() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      const json = await response.json()
      setData(json)
    }

    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.dataapi}>
      <h5>Data from API:</h5>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  )
}

export default DataFetcher
