import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductList = (props) => {
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
        <table>
          <thead>
            <th>
              <th>#</th>
              <th>name</th>
              <th>action</th>
            </th>
          </thead>
          <tbody>
            {data.map((item, index) =>{
        <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => remove(item.id)}>
                        delete
                </button>
              </td>
        </tr>
            })}
          </tbody>
        </table>
      </div>
  )
}

export default ProductList