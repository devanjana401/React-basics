import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../slices/productSlice';
import { addToCart } from '../slices/cartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const {items,loading,error} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProduct());
    },[dispatch]);

    if(loading)
        return <p>Loading Products....</p>
    if(error)
        return <p style={{color:'red'}}>Error: {error}</p>


  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
            <div>
                <img 
                    src= {product.thumbnail}
                    alt= {product.title}
                    style={{height:'200px',objectFit:'cover'}}
                />
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;