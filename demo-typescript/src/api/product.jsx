import instance from "./instance";

const getAll = () =>{
        return instance.get("/products")
}

const create = (product) =>{
        return instance.post("/products", product)
}

const remove = (id) =>{
        return instance.delete("/products/"+ id)
}

const update = (product) =>{
        return instance.patch("/products/"+ product.id, product)
}

export {getAll, create, remove, update}