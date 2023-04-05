import { IUser } from "../types/usesr";
import instance from "./instance";

export const signIn = (user: IUser) => {
    return instance.post("/signin", user);
}