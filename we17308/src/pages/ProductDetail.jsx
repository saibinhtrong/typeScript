import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
        const {id} = useParams();
        const [productOne, setProductsOne] = useState({});
        useEffect(() =>{
                axios.get(`http://localhost:3000/products/`+ id)
                .then(({data}) => setProductsOne(data))
        })
  return (
                <div>
                 <table border={1} width={"500px"} >
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>name</th>
                          <th>description</th>
                          <th>image</th>
                        
                      </tr>
                  </thead>
                  <tbody>
                  {productOne.map((product, index)=>{
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

export default ProductDetail