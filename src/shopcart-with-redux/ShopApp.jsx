import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function ShopApp() {
  return (
    <Provider store={store}>
      <h1 style={{textAlign:'center',textDecoration:'underline'}}>Shopping Cart</h1>
      <div style={{display:'flex',justifyContent:'center',gap:'200px'}}>
        <div>
          <ProductList/>
        </div>
        <div>
          <Cart/>
        </div>
      </div>
    </Provider>
  )
}

export default ShopApp
