import React from 'react'
import { CartProvider } from '../context/CartContext'
import Header from './Header'
import ProductList from './ProductList'
import CartList from './CartList'

export default function CartApp() {
  return (
    <CartProvider>
        <div>
            <Header/>
            <main style={{display:'flex',alignItems:'center'}}>
                <ProductList/>
                <CartList/>
            </main>
        </div>
    </CartProvider>
  )
}
