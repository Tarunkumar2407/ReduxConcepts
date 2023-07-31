import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/action/IceCreamAction'

const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Ice-Creams: {numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
