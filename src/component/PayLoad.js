import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../reduxPayload/redux/action/CakeAction'


const PayLoad = () => {
    const [number, setNumber] = useState(1)
    const NumberOfCakes = useSelector(state => state.NumberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes: {NumberOfCakes}</h2>
      <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}></input>
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>

    </div>
  )
}

export default PayLoad
