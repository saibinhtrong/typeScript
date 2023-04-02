import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    const currentProduct = props.products.find((item) => item.id == id)
    setProducts(currentProduct);
  }, [props]);

  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const updateData = { ...product, ...inputValue };
    console.log(updateData);
    props.onUpdate(updateData);
    navigate("/products");
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          defaultValue={product?.name}
          onChange={onHandleChange}
          name="name"
        />
        <input
          type="number"
          defaultValue={product?.price}
          onChange={onHandleChange}
          name="price"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProductEdit;
