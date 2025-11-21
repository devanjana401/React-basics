import React from 'react'

const RealWorld = () => {
    const products = [
        {id:"p1", name:"t-shirt"},
        {id:"p2", name:"shirt"}
    ]
  return (
    <div>
      <ul>
        {products.map(prdt => (
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealWorld



// To list array or objects,that need to map using .map