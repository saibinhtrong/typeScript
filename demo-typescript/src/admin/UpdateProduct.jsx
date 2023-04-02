import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
        const {id} = useParams();
        const navigate = useNavigate();
      const [product, setProducts] = useState({});
      useEffect(() =>{
        const currentProduct = props.products.find(item => item.id == id);
        setProducts(currentProduct);
      },[props])

      const [valueInput, setValueInput] = useState({});
      const onHandleChange = (e) =>{
        const {name, value} = e.target;
        setValueInput({...valueInput, [name]: value});
      }
      const onHandSubmit = (e) =>{
        e.preventDefault();
        const updateProduct = {...product, ...valueInput}
        props.onUpdate(updateProduct)
        navigate('/admin/products');
      }
  return (
        <form onSubmit={onHandSubmit}>
        <input type="text" defaultValue={product?.name} name='name' onChange={onHandleChange}/>
        <input type="number" defaultValue={product?.price} name='price' onChange={onHandleChange}/>
        <button>Submit</button>   
        </form>
  )
}

export default UpdateProduct