import instance from "./instance";
const getAll = () => {
  return instance.get("/products");
};
const getOne = (id) => {
  return instance.get("/products/" + id);
};
const remove = (id) => {
  return instance.delete("/products/" + id);
};
const create = () => {
  return instance.post("/products");
};
const update = (product) => {
  return instance.patch("/products/" + product.id, product);
};

export { getAll, getOne, remove, create, update };
