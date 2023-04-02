import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = (props) => {
  const {id} = useParams();
  const navigate = useNavigate();
       const [product, setProducts ] = useState({});
  useEffect(() =>{
    const currentProduct = props.products.find((item) => item.id == id);
    setProducts(currentProduct)
  },[props])

  const [valueInput, setValueInput] = useState({})
  
const onHAndleChange =(e) =>{
  const {name, value} = e.target;
  setValueInput({...valueInput, [name]: value})

}

const onHandSubmit =(e) =>{
  e.preventDefault();
  const updateProduct = {...product, ...valueInput}
  props.onUpdate(updateProduct);
  navigate("/admin/products")
}
  return (
        <form onSubmit={onHandSubmit}>
      <input type="text"  name='name' defaultValue={product?.name} onChange={onHAndleChange}/>
      <input type="text" name='decs'  onChange={onHAndleChange}/>
      <input type="text"  name='image' onChange={onHAndleChange}/>
      <button type="submit">update</button>
        </form>
  )
}

export default ProductEdit