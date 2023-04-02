import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {
        const [data, setData] = useState([]);
        useEffect(() =>{
          setData(props.products);
        },[props])
    
        return (
                <div>
                 <table border={1} width={"500px"} height={"960px"} >
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>name</th>
                          <th>description</th>
                          <th>image</th>
                        
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
                      </tr>
                    )
                  })}
                  </tbody>
                 </table>
                </div>
              )
}

export default ProductPage