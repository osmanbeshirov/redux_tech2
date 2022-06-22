import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Parent from './Parent'

const Grandparent = () => {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  console.log(counter)

  return (
    <div><Parent />
      <button onClick={() => dispatch({type: 'INC'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DEC'})}>Decrement</button>
    </div>


  )

}
export default Grandparent;