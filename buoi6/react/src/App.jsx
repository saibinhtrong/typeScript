import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/product";
import ProductList from "./pages/admin/ProductList";
import ProductDetailPage from "./pages/ProductDetail";
import { getAll, remove, update } from "./api/product";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then(({ data }) => setProducts(data));
  }, []);

  const onHandRemove = (id) => {
    remove(id).then(() =>
      setProducts(products.filter((item) => item.id !== id))
    );
  };

  const onHandAdd = (product) => {
    setProducts([...products, { ...product, id: 1 }]);
  };

  const onHandleUpdate = (product) => {
    update(product).then(() => setProducts({ ...product }));
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/productsList"
          element={<ProductList products={products} onRemove={onHandRemove} />}
        />
        <Route
          path="/products"
          element={<ProductPage products={products} onRemove={onHandRemove} />}
        />
        <Route
          path="/products/add"
          element={<ProductAdd onAdd={onHandAdd} />}
        />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/edit"
          element={
            <ProductEdit onUpdate={onHandleUpdate} products={products} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
