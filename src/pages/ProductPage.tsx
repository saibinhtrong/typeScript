import React, { useState, useEffect } from 'react'
import { IProduct } from '../types/product'
interface IProps{
        products:IProduct[],

}
const ProductPage = (props: IProps) => {
        const [data, setData] =  useState<IProduct[]>([])
        useEffect(() => {
                setData(props.products)
        }, [props])
        return (
                <div>
                 <table border={1} width={"500px"}  >
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>name</th>
                          <th>price</th>
                        
                      </tr>
                  </thead>
                  <tbody>
                  {data.map((product, index)=>{
                    return(
                      <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                      </tr>
                    )
                  })}
                  </tbody>
                 </table>
                </div>
              )
}

export default ProductPage