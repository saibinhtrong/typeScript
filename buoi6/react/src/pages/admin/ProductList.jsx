import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    setData(props.products)
  },[props])
  function removeProduct(id){
    props.onRemove(id)
  }
  return (
        <div>
        <table>
          <thead>
            <th>
              <th>#</th>
              <th>name</th>
              <th>price</th>
              <th>action</th>
            </th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => removeProduct(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default ProductList