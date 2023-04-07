import instance from './instance';
import { IProduct } from '../types/product';

const getAll = () =>{
        return instance.get('/products');
}
const get =(id:number) =>{
        return instance.get('/products/'+id);
}
const create = (product:IProduct) =>{
        const { accessToken } = JSON.parse(localStorage.getItem('user')!)
        console.log(product)
        return instance.post("/products/" , product, {

                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
        });
}
const remove = (id:number) =>{
        const { accessToken } = JSON.parse(localStorage.getItem('user')!)
        return instance.delete("/products/" + id, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
        });
}
const update = (product: IProduct) =>{
        return instance.put('/products/'+ product.id, product);
}

export{ getAll, create, remove, update}