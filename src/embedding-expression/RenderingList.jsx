import React from 'react'

const RenderingList = () => {
    const fruits = ["Apple","Orange","Grape"];
  return (
    <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ul>
  )
}

export default RenderingList
