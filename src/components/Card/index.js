import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';

function Card({ food, addToCart, removeFromCart }) {
   const [count, setCount] = useState(0);

   const handlerIncrement = () => {
      setCount(count + 1);
      addToCart(food);
   }

   const handlerDicrement = () => {
      setCount(count - 1);
      removeFromCart(food);
   }

   return (
      <li className='col-sm-6 col-md-4 col-xxl-3'>
         <MDBCard className='border-2' border='warning' background='transparent'>
            <MDBCardBody>
               <MDBCardTitle className='mb-3'>{food.title}</MDBCardTitle>

               <img className='mb-2' src={food.Image} alt={`${food.title} img`} width={100} height={100} />

               <MDBCardText className='fs-4'>
                  Price: {food.price}$
               </MDBCardText>

               <div className="d-flex gap-2">
                  <MDBBtn onClick={handlerIncrement} className='flex-grow-1 fs-6' color='warning'>+</MDBBtn>
                  {count ?
                     <MDBBtn onClick={handlerDicrement} className='flex-grow-1 fs-6' color='danger'>-</MDBBtn>
                     : null
                  }
               </div>
            </MDBCardBody>

            {count ?
               <span className='position-absolute top-0 start-100 translate-middle bg-warning text-white rounded-circle py-2 px-3'>
                  {count}
               </span> : null
            }
         </MDBCard>
      </li>
   )
}

export default Card