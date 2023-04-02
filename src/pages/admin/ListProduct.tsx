import React, { useState, useEffect } from 'react'
import { IProduct } from '../../types/product'
interface IProps{
        products:IProduct[],
        onRemove: (id: number) => void
}
const ListProduct = (props: IProps) => {
        const [data, setData] =  useState<IProduct[]>([])
        useEffect(() => {
                setData(props.products)
        }, [props])
        function deleteProduct(id: number) {
                props.onRemove(id)
        }
        return (
                <div>
                 <table border={1} width={"500px"}  >
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>name</th>
                          <th>price</th>
                          <th>action</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data.map((product, index)=>{
                    return(
                      <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button onClick={()=> deleteProduct(product.id)}>Delete</button></td>
                      </tr>
                    )
                  })}
                  </tbody>
                 </table>
                </div>
              )
}

export default ListProduct