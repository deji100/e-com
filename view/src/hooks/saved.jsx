import { useEffect, useState } from "react"

const useSavedProducts = () => {
    const [savedProducts, setSavedPrducts] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://127.0.0.1:8000/saved-products/', {signal})
        .then(res => res.json())
        .then(data => setSavedPrducts(data))
        .catch(error => {
            // console.log(error)
        })

        return () => {
            controller.abort()
        }
    }, [savedProducts])

    return savedProducts
}

export default useSavedProducts;