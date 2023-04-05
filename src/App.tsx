import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import { getAll, remove, create, update } from './api/product'
import AddProdutct from './pages/admin/AddProdutct'
import ListProduct from './pages/admin/ListProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import { IProduct } from './types/product'
import RootLayout from './components/rootLayout'
import AdminLayout from './components/adminLayout'
import Signin from './pages/sign/signin'

function App() {
const [products, setProducts] = useState([])
useEffect(() =>{
    getAll().then(({data}) => setProducts(data))
},[])
const onHandleRemove =(id: number) =>{
  remove(id).then(() => setProducts(products.filter((item: IProduct)=> item.id !== id)))
}

const onHandLeAdd= (product:IProduct) =>{
    create(product).then(() => getAll().then(({data}) => setProducts(data)))
}
const onHandleUpdate= (product:IProduct) =>{
  update(product).then(() => getAll().then(({data}) => setProducts(data)))
}
  return (
    <div className="App">
     <Routes>  
          <Route path='/' element={< RootLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='products' element={<ProductPage products={products}/>}/>
            <Route path='products/:id' element={<ProductDetail products={products}/>}/>
            <Route path='signin' element={<Signin/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='products'>
              <Route  index element={<ListProduct products={products} onRemove={onHandleRemove}/>}/>
              <Route path='add' element={<AddProdutct  onAdd={onHandLeAdd} />}/>
              <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />}/>
            </Route>
          </Route>
     </Routes>
    </div>
  )
}

export default App
