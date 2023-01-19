import './products.css'
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useCarts } from '../../hooks/carts';
import { useProducts } from '../../hooks/products'
import SingleProduct from './singleProduct';
import CategoryList from '../categories/category-list';

const Products = () => {
    const {user, checkProExist, addToCart, search, addToSaved, removeSaved} = useContext(AuthContext)

    const products = useProducts()

    const columnone = products.filter(item => parseInt(item.column) === 1)
    const columntwo = products.filter(item => parseInt(item.column) === 2)
    const columnthree = products.filter(item => parseInt(item.column) === 3)
    const columnfour = products.filter(item => parseInt(item.column) === 4)

    const carts = useCarts()

    const searchFilter = products.filter(item => 
                                            item.title.toUpperCase().match(search.toUpperCase()) ||
                                            item.slug.toUpperCase().match(search.toUpperCase())) 
    
    const userCart = carts?.filter(cart => cart.user === user.user_id)

    return (
        <>  
            <div style={{visibility: 'hidden'}}>E-commerce App</div>
            <CategoryList />
            <div className='prods'>
                {search?
                    searchFilter.map(product => 
                    <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart} user={user} addToSaved={addToSaved} removeSaved={removeSaved}/>)
                    :
                    <>
                        <div className="column1">
                            {columnone.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart} user={user} addToSaved={addToSaved} removeSaved={removeSaved}/>
                            )}
                        </div>
                        <div className="column3">
                            {columnthree.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart} user={user} addToSaved={addToSaved} removeSaved={removeSaved}/>
                            )}
                        </div>
                        <div className="column2">
                            {columntwo.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart} user={user} addToSaved={addToSaved} removeSaved={removeSaved}/>
                            )}
                        </div>
                        <div className="column4">
                            {columnfour.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart} user={user} addToSaved={addToSaved} removeSaved={removeSaved}/>
                            )}
                        </div>
                    </>   
                }     
            </div>
        </>
    )
}


export default Products;
