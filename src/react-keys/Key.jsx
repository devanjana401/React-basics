import React from 'react'

const Key = () => {
    const items = ['Apple','Banana','Orange']
  return (
    <div>
      <ul>
        {items.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Key
