import React, { useReducer } from 'react'
import shoppingReducer from '../reducer/shoppingReducer';

const ShopCart = () => {
    const [cart, dispatch] = useReducer(shoppingReducer, []);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => dispatch({type:"ADD-ITEM",payload:"Apple"})}>Add Apple</button>
      <button onClick={() => dispatch({type:"ADD-ITEM",payload:"Orange"})}>Add Orange</button>
      <ul>
        {cart.map((item) => (
            <li key={item.id}> {item.name} <span>x</span> {item.qty}
            <button onClick={() => dispatch({type:"INCREASE", payload:item.id})}>➕</button>
            <button onClick={() => dispatch({type:"DECREASE", payload:item.id})}>➖</button>
            <button onClick={() => dispatch({type:"REMOVE-ITEM", payload:item.id})}>❌</button>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default ShopCart
