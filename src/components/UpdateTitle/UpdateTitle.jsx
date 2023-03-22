import React, { useEffect } from 'react'

function UpdateTitle({ title }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return <></>
}

export default UpdateTitle
