import React from 'react';

import Card from '../Card';

function Cards(props) {
   const { foods, addToCart, removeFromCart } = props;

   if (!foods.length) {
      return (
         <span className='text-danger'>No foods!</span>
      )
   }

   return (
      <ul className='row g-5 list-unstyled'>
         {foods.map((food) => (
            <Card
               food={food}
               key={food.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
            />
         ))}
      </ul>
   )
}

export default Cards;