import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductAdd = ({onAdd}) => {
  const navigate = useNavigate();
const [valueInput, setValueInput] = useState({})

const onHAndleChange =(e) =>{
  const {name, value} = e.target;
  setValueInput({...valueInput, [name]: value})

}

const onHandSubmit =(e) =>{
  e.preventDefault();
  onAdd(valueInput);
 
  navigate("/admin/products")
}
  return (
    <form onSubmit={onHandSubmit}>
      <input type="text" placeholder="Product Name" name='name' onChange={onHAndleChange}/>
      <input type="text" placeholder="Product description" name='desc' onChange={onHAndleChange}/>
      <input type="text" placeholder="image " name='image' onChange={onHAndleChange}/>
      <button type="submit">them</button>
    </form>
  )
}

export default ProductAdd