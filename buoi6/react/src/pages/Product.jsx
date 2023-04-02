
import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    setData(props.products)
  },[props])
  function removeProduct(id){
    props.onRemove(id)
  }

  return (
    <div>
        { Array.isArray(data) ? (data.map((item, index)=> (
                <div key={item.id}>
                        <h1>{index}</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.price}</h1>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                </div>
                ))
        ):(
          <h1>Loading...</h1>
        )
        
        }
    </div>
  )
}

export default ProductPage

