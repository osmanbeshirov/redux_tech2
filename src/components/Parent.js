import React from 'react'
import Child from './Child'

import { useSelector } from 'react-redux'

const Parent = () => {

  const result = useSelector((state) => state.students)

  // console.log(result)


  return (
    <div><Child /></div>
  )

}


export default Parent;