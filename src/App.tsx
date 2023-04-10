import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import { getAll, remove, create, update } from './api/product'
import AddProdutct from './pages/admin/AddProdutct'
import ListProduct from './pages/admin/ListProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import { ICategory, IProduct } from './types/product'
import RootLayout from './components/rootLayout'
import AdminLayout from './components/adminLayout'
import Signin from './pages/sign/signin'
import Signup from './pages/sign/singup'
import './App.css'
import { getAllCategory } from './api/category'
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAll();
      setProducts(data.docs);
    })()
  }, []);
  const [categorys, setCategorys] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      setCategorys(data);
    })()
  }, []);
 

const onHandleRemove =(id: number) =>{
  remove(id).then(() => setProducts(products.filter((item: IProduct)=> item.id !== id)))
  window.location.reload()
}

const onHandLeAdd= (product:IProduct) =>{
    create(product)
   
}
const onHandleUpdate= (product:IProduct) =>{
  
  update(product).then(() => setProducts(products.map(item => item.id == product.id ? product : item)))
}
  return (
    <div className="App" >
     <Routes>  
          <Route path='/' element={< RootLayout/>}>
            <Route index element={<HomePage products={products}  categories={categorys} />}/>
            <Route path='products' element={<ProductPage products={products}/>}/>
            <Route path='about' element=" about page"/>
            <Route path='services' element=" services page"/>
            <Route path='contact' element=" contact page"/>
            <Route path='products/:id' element={<ProductDetail products={products}/>}/>
            <Route path='signin' element={<Signin/>}/>
            <Route path='signup' element={<Signup/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='products'>
              <Route  index element={<ListProduct products={products} onRemove={onHandleRemove}/>}/>
              <Route path='add' element={<AddProdutct categories={categorys}  onAdd={onHandLeAdd} />}/>
              <Route path=':id/update' element={<UpdateProduct categories={categorys} products={products} onUpdate={onHandleUpdate} />}/>
            </Route>
          </Route>
     </Routes>
    </div>
  )
}

export default App
