import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { filter, empty } from '../redux/actions/productsAction.js'

const Child = () => {

  const products = useSelector((state) => state.products);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(products)

  return (
    <div>Child

      <button onClick={() => dispatch({ type: 'ADD', payload: counter })}>Add Product</button>

      <button onClick={() => dispatch(filter(products))}>Show me only more than 3 letters</button>

      <button onClick={() => dispatch(empty())}>Remove all products</button>

      {products.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      {/* <button onClick = {() => dispatch({type: 'DEL'})}>Delete Product</button> */}

    </div>
  )

}

export default Child;