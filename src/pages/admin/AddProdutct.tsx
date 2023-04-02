import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IProduct } from '../../types/product';
interface IProps{
      products:IProduct[],
      onAdd: (product:IProduct) => void
}
const AddProdutct = (props:IProps) => {
      const {register, handleSubmit} = useForm();
      const navigate = useNavigate()
  const onHandSubmit=(data:IProduct) =>{
       props.onAdd(data)
       navigate("/admin/products/list")
  }


  return (
        <form onSubmit={handleSubmit(onHandSubmit)}>
        <input type="text" placeholder="Product Name" {...register("name")}  />
        <input type="text" placeholder="Product pricec"  {...register("price")}  />
        <button type="submit">them</button>
      </form>
  )
}

export default AddProdutct