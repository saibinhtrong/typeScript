import { ICategory } from "../types/product";

import instance from "./instance";

export const getAllCategory = () => {
    return instance.get("/categorys")
}
export const getCategory = (id: number | string) => {
    return instance.get("/categorys/" + id);
}
export const addCategory = (category: ICategory) => {
        const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.post("/categorys", category, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }

    }
    );
}
export const updateCategory = (category: any) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.patch("/categorys/" + category.id, category, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const removeCategory = (id: number | string) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.delete("/categorys/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}