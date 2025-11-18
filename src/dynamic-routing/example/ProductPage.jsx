import React from 'react'
import './ProductPage.css';
import {products} from './data/Product.js';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

const ProductPage = () => {
  return (
    <div className='products-container'>
      <h2 className='section-title'>
        Special Yoga Classes with offers
      </h2>
      <p className='section-subtitle'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='products-grid'>
        {products.map((item) => (
            <Link key={item.id} to={'/product/${item.id'} style={{textDecoration:'none'}}>
                {/* <ProductCard products={item}/> */}
                <ProductCard products={item}/>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
