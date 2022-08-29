import { myAxios } from "./helper";

export const signup = (user) => {
    return myAxios.post("/api/v1/auth/register", user).then((response) => response.data)
}
