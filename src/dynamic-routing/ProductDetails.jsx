import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBoxOpen } from "react-icons/fa";

const ProductDetails = () => {
    
    const {id} =useParams();      //used to get or extract dynamic values..This is a hook of react-router-dom
  return (
    <div>
      <h2><FaBoxOpen /> Product id: {id}</h2>
    </div>
  )
}

export default ProductDetails
