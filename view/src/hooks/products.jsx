import { useState, useEffect, useCallback } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = useCallback((signal) => {
        const url = 'http://127.0.0.1:8000/'
        fetch(url, { signal })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => {
            if (err.name === 'AbortError') {
                // ***
            }else {
                // ***
            }
        })
    }, [])

     // fetch products
     useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetchProducts(signal)

        return () => {
            controller.abort()
        }

        }, [fetchProducts])

    
    return products;
}
