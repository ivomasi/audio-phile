import React,{useState, useEffect} from 'react'


import {useLocation} from "react-router-dom"

function Product() {

  const {state} = useLocation()

  console.log(state)
  const {brand} = state.product

    useEffect(() => {

    },[])
    
  
   
  return (
    <div>Product page

    </div>
  )
}

export default Product