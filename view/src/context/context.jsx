import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useAxios from "../utils/useAxios";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens")? JSON.parse(localStorage.getItem("authTokens")): null);

    const [user, setUser] = useState(() => localStorage.getItem("authTokens")? jwt_decode(localStorage.getItem("authTokens")): null)

    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState("")

    const navigate = useNavigate();

    // AuthProvider methods
    const registerUser = async (username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/user/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2
            })
        })

        if (response.status === 201) {
            navigate("/login")
        }else {
            alert("Something went wrong")
        }
    };


    const loginUser = async (username, password) => {
        const response = await fetch("http://127.0.0.1:8000/user/token/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data?.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/")
        } else {
            alert("Credential don't exist.");
        }
    };


    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
    };

    const handleSearch = useCallback((e) => {
        let value = e.target.value
        setSearch(value)
    }, [])

    const addToSaved = useCallback(async (product) => {
        const url = "http://127.0.0.1:8000/saved-products/"
        // eslint-disable-next-line
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: user.user_id,  product})
        })
    }, [user])

    const removeSaved = useCallback( (id) => {
        const url = `http://127.0.0.1:8000/saved-products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
    }, [])

    const addToCart = useCallback(async (product, ref) => {
        const url = "http://127.0.0.1:8000/cart-products/"
        // eslint-disable-next-line
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: user.user_id,  product, ref})
        })
    }, [user])


    const checkProExist = useCallback((proId, userCart) => {
        for (let x of userCart) {
            if (x.product === proId) {
                return true;
            }
        }
        return false
    }, [])


    const totalCartQuantity = useCallback((userCart) => {
        let totalQuantity = 0

        for (let x of userCart) {
            totalQuantity += x.quantity
        }
        return totalQuantity
    }, [])


    const totalCartAmount = useCallback((userCart) => {        
        let amount = 0

        for (let x of userCart) {
            amount += x.amount
        }
        return amount
    }, [])


    const removeProduct = useCallback((id) => {
        const url = `http://127.0.0.1:8000/cart-products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
    }, [])


    const incrementCartProductQuantity = useCallback(async (id, quantity, user, product) => {
        const url = `http://127.0.0.1:8000/cart-products/${id}`
        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity, user, product})
        })
    }, [])
    

    const decrementCartProductQuantity = useCallback(async (id, quantity, user, product) => {
        const url = `http://127.0.0.1:8000/cart-products/${id}`
        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity, user, product})
        })
    }, [])

    // AuthProvider Context
    const contextData = {
        user,   
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
        search,
        setSearch,
        handleSearch,
        addToCart,
        addToSaved,
        checkProExist,
        removeProduct,
        removeSaved,
        incrementCartProductQuantity,
        decrementCartProductQuantity,
        totalCartQuantity,
        totalCartAmount
    };


    // renew access token
    useEffect(() => {
        const time = 1000 * 60 * 5
        const interval = setInterval(() => {
            return useAxios
        }, time)

        return () => clearInterval(interval)
    }, [])
    
    // set user
    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);

    }, [authTokens])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <div style={{margin: 'auto'}}>Loading</div> : children}
        </AuthContext.Provider>
    )
};

export default ContextProvider;