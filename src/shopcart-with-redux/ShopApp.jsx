import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function ShopApp() {
  return (
    <Provider store={store}>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList/>
      </div>
      <div>
        <Cart/>
      </div>
    </Provider>
  )
}

export default ShopApp
