import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function Cart({ cartItems, clickCheckout }) {
   const totalPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

   return (
      <div className='mb-5'>
         <h3 className='mb-3'>Total Price: {totalPrice.toFixed(2)}</h3>

         <MDBBtn onClick={clickCheckout} color={cartItems.length ? 'success' : 'warning'} disabled={!cartItems.length}>
            {cartItems.length ? 'Checkout' : 'Order!'}
         </MDBBtn>
      </div>
   )
}

export default Cart;