import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
        const {id} = useParams();
        const [product, setProducts] = useState({});
        useState(() =>{
                axios.get(`http://localhost:3000/products/`+ id)
                .then(({data}) => setProducts(data))
        })
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductDetailPage