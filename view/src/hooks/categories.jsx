import { useState, useEffect } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://127.0.0.1:8000/products-categories', { signal })
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => {
            if (err.name === 'AbortError') {
                // ***
            }else {
                // ***
            }
        })

        return () => {
            controller.abort()
        }
        
    }, [])

    return {categories}
}

export default useCategories;