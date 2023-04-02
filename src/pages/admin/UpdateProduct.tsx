import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../types/product'
      interface IProps{
        products:IProduct[],
        onUpdate: (product:IProduct) => void
}
const UpdateProduct = (props:IProps) => {
        const {id} = useParams();
        const navigate = useNavigate();
        const {register, handleSubmit, reset} = useForm();
        useEffect(()=>{
                const currentProduct = props.products.find((item) => item.id === Number(id));
                reset(currentProduct)
        },[props])
     
        
        const onHandSubmit =(data) =>{
          props.onUpdate(data);
          navigate("/admin/products/list")
        }
  return (
        <form onSubmit={handleSubmit(onHandSubmit)}>
        <input type="text"  {...register("name")}/>
        <input type="text"  {...register("price")}/>
        <button type="submit">them</button>
      </form>
  )
}

export default UpdateProduct