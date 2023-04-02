import instance from './instance';
import { IProduct } from '../types/product';

const getAll = () =>{
        return instance.get('/products');
}
const get =(id:number) =>{
        return instance.get('/products/'+id);
}
const create = (product:IProduct) =>{
        return instance.post('/products', product);
}
const remove = (id:number) =>{
        return instance.delete('/products/'+id);
}
const update = (product: IProduct) =>{
        return instance.put('/products/'+ product.id, product);
}

export{ getAll, create, remove, update}