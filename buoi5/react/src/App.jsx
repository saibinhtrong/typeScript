import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/product'
import axios from 'axios'
import ProductList from './pages/admin/ProductList'
import ProductDetailPage from './pages/ProductDetail'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
   axios.get(`http://localhost:3000/products`)
      .then(({data}) => setProducts(data))
  }, [])

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products' element={<ProductPage products={products}/>}/>
      <Route path='/admin/products' element={<ProductList/>}/>
      <Route path='/products/:id' element={<ProductDetailPage/>}/>
    </Routes>
    </div>
  )
}

export default App