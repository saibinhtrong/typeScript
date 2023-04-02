
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { create, getAll, remove, update } from './api/product'
import './App.css'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import ProductList from './pages/admin/ProductList'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'

import ProductPage from './pages/ProductPage'

function App() {
const [products, setProducts] = useState([]);
useEffect(() =>{
  getAll().then(({data}) => setProducts(data));
},[])
  
const onHandRemove = (id) =>{
    if (window.confirm("Mời bạn xác nhận, có muốn xóa hay ko!" )== true) {
      remove(id)
        setProducts(products.filter(item => item.id !== id))
    } 
}
const onHandAdd = (product) =>{
  create(product).then(() => alert(confirm("them thanh cong")));
}
const onHandUpdate = (product) =>{
  update(product)
  .then(()=> setProducts(products.map(item => item.id == product.id ? product : item)))
  .then(() => alert(confirm("update thanh cong")));
}
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>



     {/* <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/products' element={<ProductPage products={products}/>}/>
      <Route path='/admin/products' element={<ProductList products={products} onRemove={onHandRemove}/>}/>
      <Route path='/admin/products/add' element={<ProductAdd onAdd={onHandAdd}/>}/>
      <Route path='/admin/products/:id/edit' element={<ProductEdit products={products} onUpdate={onHandUpdate}/>}/> */}
    </Routes>
    <Routes>
        <Route path='/' element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products}/>} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>
    </Routes>

    </div>
  )
}
export default App
