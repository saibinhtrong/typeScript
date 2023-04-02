import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = ({onAdd}) => {
     const [valueInput, setValueInput] = useState({
        name: '',
        price: 0
     })
     const navigate = useNavigate();
     const onHandleChange =(e) =>{
        const {name, value} = e.target;
        setValueInput({
          ...valueInput,
            [name]: value
        })
     }
     const onHandSubmit = (e) =>{
        e.preventDefault();
        console.log(valueInput);
        onAdd(valueInput);
        navigate("/admin/products");
     }
  return (
 <form onSubmit={onHandSubmit}>
        <input type="text" placeholder="Product Name " name='name' onChange={onHandleChange}/>
        <input type="number" placeholder="Product Price" name='price' onChange={onHandleChange}/>
        <button>Submit</button>
 </form>
  )
}

export default AddProduct