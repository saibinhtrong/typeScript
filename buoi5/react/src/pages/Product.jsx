import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    setData(props.products)
  },[props])
   function remove(id){
 axios.delete(`http://localhost:3000/products/`+ id)
 .then(() =>setData(data.filter(item => item.id != id)))
 }
  return (
    <div>
        {data.map(item => {
                return <div key={item.id}>
                        <h1>{item.name}</h1>
                        <button onClick={() => remove(item.id)}>Remove</button>
                </div>
        })}
    </div>
  )
}

export default ProductPage

