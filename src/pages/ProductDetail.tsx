import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'
interface IProps{
        products:IProduct[],
      }
      
const ProductDetail = (props: IProps) => {
        const {id} = useParams()
        const [product, setProduct] = useState({});
        useEffect(( ) =>{
                const currentProduct = props.products.find(item => item.id === Number(id))
                setProduct(currentProduct)
        },[props])
  return (
    <div>
       
        <img src={product?.image} alt="" />
        <h2>{product?.name}</h2>
        <p>{product?.price}</p>
    </div>
  )
}

export default ProductDetail