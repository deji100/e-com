import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import { AuthContext } from "../context/context";


const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

    const baseUrl = "http://127.0.0.1:8000/user";

    const axiosInstance = axios.create({
        baseUrl,
        headers: { Authorization: `Bearer ${authTokens?.access}`}
    });

    axiosInstance.interceptors.request.use(async (req) => {
        const user = jwt_decode(authTokens.access);
        const isExpired = dayjs.unix(parseInt(user.exp)).diff(dayjs()) < 1;
        console.log(isExpired)

        if (!isExpired) return req;

        const response = await axios.post(`${baseUrl}/token/refresh/`, {
            refresh: authTokens.refresh
        });

        localStorage.setItem('authTokens', JSON.stringify(response.data));

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    });
    return axiosInstance;
}

export default useAxios;