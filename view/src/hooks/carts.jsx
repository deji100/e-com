import { useState, useEffect, useCallback, useMemo, useRef } from "react";

export const useCarts = () => {
    const [carts, setCarts] = useState([]);

    const fetchCart = useRef(() => {})
    
    // fetch cart-products

    fetchCart.current = useCallback(async () => {
        const url = "http://127.0.0.1:8000/cart-products/"
        let res = await fetch(url)
        let data = await res.json()
        setCarts(data)
    }, [])
    

    useEffect(() => {
        fetchCart.current()
    }, [fetchCart, carts])

    return carts;
}