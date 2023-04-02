import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import { getAll, remove, create, update } from './api/product'
import './App.css'
import AddProdutct from './pages/admin/AddProdutct'
import ListProduct from './pages/admin/ListProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'


interface IProduct {
  id: number;
  name: string;
  price: number;
}

function App() {
const [products, setProducts] = useState([])
useEffect(() =>{
    getAll().then(({data}) => setProducts(data))
},[])
const onHandleRemove =(id: number) =>{
  remove(id).then(() => setProducts(products.filter(item => item.id !== id)))
}

const onHandLeAdd= (product:IProduct) =>{
    create(product);
}
const onHandleUpdate= (product:IProduct) =>{
  update(product).then(() => setProducts(products.map(item => item.id == product.id ? product : item)))
}
  return (
    <div className="App">
     <Routes>  
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='products' element={<ProductPage products={products}/>}/>
            <Route path='products/:id' element={<ProductDetail products={products}/>}/>
          </Route>
          <Route path='/admin'>
            <Route path='products'>
              <Route path='list' element={<ListProduct products={products} onRemove={onHandleRemove}/>}/>
              <Route path='add' element={<AddProdutct  onAdd={onHandLeAdd} />}/>
              <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />}/>
            </Route>
          </Route>
     </Routes>
    </div>
  )
}

export default App
