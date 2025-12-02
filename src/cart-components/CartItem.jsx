import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export default function CartItem({item}) {
  const {dispatch} = useContext(CartContext);
  return (
    <div>
      <li>
        <span>
          •{item.name} - ₹{item.price} x {item.qty}
        </span>
        <div>
          <button onClick={() => dispatch({type:"INCREASE", payload:item.id})}>
            ➕
          </button>
          <button onClick={() => dispatch({type:"DECREASE", payload:item.id})}>
            ➖
          </button>
          <button onClick={() => dispatch({type:"REMOVE-ITEM", payload:item.id})}>
            ❌
          </button>
        </div>
      </li>
    </div>
  )
}
