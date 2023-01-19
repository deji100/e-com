import {useParams} from 'react-router-dom'
import './product.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/context';
import { useProducts } from '../../hooks/products'
import { useCarts } from '../../hooks/carts';
import { v4 as uuidv4 } from 'uuid'


const Product = () => {
    const {user, checkProExist, addToCart} = useContext(AuthContext)
    const { productSlug } = useParams()
    const products = useProducts()

    const carts = useCarts()
    const userCart = carts?.filter(cart => cart.user === user.user_id)

    let uid = uuidv4()

    return (
        <div>
            {products.map(product => {
                if (product.slug === productSlug) {
                    return (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <img width={300} height={300} src={product.photo} alt="" />
                            <p>${product.price}</p>
                            <button>Save</button>
                            <button onClick={() => checkProExist(product.id, userCart)? alert(`${product.title} exists in cart.`): addToCart(product.id, uid)}>Add to cart</button>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default Product;