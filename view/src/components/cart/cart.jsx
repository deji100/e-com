import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useCarts } from "../../hooks/carts";
import { useProducts } from "../../hooks/products";
import './cart.css'

const Cart = () => {
    const products = useProducts()

    const {user,  
           removeProduct,
           totalCartAmount, 
           incrementCartProductQuantity, 
           decrementCartProductQuantity} = useContext(AuthContext)

    const carts = useCarts()
    const userCart = carts?.filter(cart => cart.user === user.user_id)

    return (
        <div className="cart_container">
            <div className="shopping_cart">
                <p>Shopping Cart</p>
                <button className="checkout">Checkout</button>
            </div>
            <div className="cart_checkout">
                <div className="total">
                    Total Amount: {totalCartAmount(userCart)}.00 NGN
                </div>
            </div>
            <div className="cart_inner_container">
                <div className="cart_prods">
                    {
                        userCart.map(item => (
                            <div key={item.id} className="cart_prod">
                                {products.map(pro => (
                                    item.product === pro.id? 
                                    <div key={pro.id} className="cart_prod_detail">
                                        <div className="photo">
                                            <img width={200} height={200} src={pro.photo} alt="" />
                                        </div>
                                        <div className="pro_detail">
                                                <div className="title_ref">
                                                    <h5>{pro.title.slice(0, pro.title.indexOf(' '))}...</h5>
                                                    <p>ref: {item.ref.slice(item.ref.lastIndexOf('-') + 1)}</p>
                                                </div>
                                                <div className="quantity">
                                                    <p>
                                                        {item.quantity}
                                                    </p>
                                                    <div>
                                                        <div className="plus"
                                                        onClick={() => incrementCartProductQuantity(item.id, item.quantity + 1, user.user_id, pro.id)}>+</div>
                                                        <div className="minus"
                                                        onClick={item.quantity < 1? 
                                                        removeProduct(item.id)
                                                        :() => decrementCartProductQuantity(item.id, item.quantity - 1, user.user_id, pro.id)}>-</div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    {item.amount}<span>.00</span>
                                                </div>
                                                <span className="cancel" onClick={() => removeProduct(item.id)}>x</span>
                                            </div>
                                    </div>: null
                                ))}
                                    
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;