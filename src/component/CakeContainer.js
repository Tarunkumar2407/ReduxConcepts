import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/action/CakeAction'

const CakeContainer = () => {
  const numOfCakes =  useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer
