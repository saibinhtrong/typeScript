import React, { useEffect, useState } from 'react'

const ProductList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
      setData(props.products);
    },[props])

    function deleteProduct(id){
      props.onRemove(id);
    }
  return (
    <div>
     <table border={1}>
      <thead>
          <tr>
              <th>#</th>
              <th>name</th>
              <th>description</th>
              <th>image</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
      {data.map((product, index)=>{
        return(
          <tr key={product.id}>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td>{product.desc}</td>
            <td><img src={product.image} alt={product.name}/></td>
            <td><button onClick={()=> deleteProduct(product.id)}>Delete</button></td>
          </tr>
        )
      })}
      </tbody>
     </table>
    </div>
  )
}

export default ProductList