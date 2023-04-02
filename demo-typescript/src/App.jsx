import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ListProduct from './admin/ListProduct'
import AddProduct from './admin/AddProduct'
import UpdateProduct from './admin/UpdateProduct'
import { create, getAll, remove, update } from './api/product'


function App() {
const [products, setProducts] =useState([]);
useEffect(() =>{
  getAll().then(({data}) => setProducts(data));
},[])

const onHandRemove = (id)=>{
  remove(id).then(() => setProducts(products.filter(item => item.id !== id)))
}

const onHandAdd = (product) =>{
  create(product).then(() => setProducts({...product}))
}
const onHandUpdate = (product) =>{
  update(product).then(() => setProducts({...product}))
}
  
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/admin/products" element={<ListProduct products={products} onRemove={onHandRemove}/>} />
     <Route path="/admin/products/add" element={<AddProduct  onAdd={onHandAdd}/>} />
     <Route path="/admin/products/:id/edit" element={<UpdateProduct products={products} onUpdate={onHandUpdate} />} />
     </Routes>
    </div>
  )
}

export default App
