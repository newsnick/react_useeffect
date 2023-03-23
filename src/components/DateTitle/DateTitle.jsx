import React, { useEffect } from 'react'
import styles from './DateTitle.module.css'

function DateTitle() {
  useEffect(() => {
    const currentDate = new Date()
    document.title = `Date is ${currentDate.toDateString()}`
  }, [])

  return (
    <div>
      <h5 className={styles.h5}>Date Title</h5>
      <p>The title displays the current date.</p>
    </div>
  )
}

export default DateTitle
