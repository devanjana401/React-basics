import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, incrementQty, decrementQty, clearCart } from '../slices/cartSlice'

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,0);

    if (cartItems.length === 0)
        return <h3>Your cart is empty</h3>;

    return (
        <div>
            <h2>Your Cart</h2>

            {cartItems.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ height: '120px', objectFit: 'cover' }}
                    />

                    <div>
                        <h4>{item.title}</h4>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>

                        <button onClick={() => dispatch(incrementQty(item))}>
                            +
                        </button>

                        <button onClick={() => dispatch(decrementQty(item))}>
                            -
                        </button>

                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h3>Total: ₹{Math.round(totalAmount)}</h3>

            <button onClick={() => dispatch(clearCart())} style={{ marginTop: 10 }}>
                Clear Cart
            </button>
        </div>
    );
}

export default Cart;
