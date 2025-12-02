import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductList() {
    const { products, dispatch} = useContext(CartContext);

  return (
    <div>
        <h2>Products</h2>
        {products.map((p) => (
            <div key={p.id}>
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
                <button onClick={() => dispatch({type:"ADD-ITEM",payload:p})}>
                    Add to Cart
                </button>
            </div>
        ))}
    </div>
  )
}
