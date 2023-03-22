import React, { useState, useEffect } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)
  }, [])

  return (
    <div>
      <p className={styles.p}>Counter: {count}</p>
    </div>
  )
}

export default Counter
