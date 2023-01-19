import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useCarts } from '../../hooks/carts';
import { useProducts } from '../../hooks/products'
import '../categories/categories.css'
import { useParams } from 'react-router-dom';
import SingleProduct from '../products/singleProduct';
import CategoryList from "./category-list";

const Category = () => {
    const {user, checkProExist, addToCart, search} = useContext(AuthContext)

    const prods = useProducts()

    const carts = useCarts()

    const {id} = useParams()
    const products = prods.filter(pro => pro.category === parseInt(id))

    const columnone = products.filter(item => parseInt(item.column) === 1)
    const columntwo = products.filter(item => parseInt(item.column) === 2)
    const columnthree = products.filter(item => parseInt(item.column) === 3)
    const columnfour = products.filter(item => parseInt(item.column) === 4)

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
                    <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart}/>)
                    :
                    <>
                        <div className="column1">
                            {columnone.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart}/>
                            )}
                        </div>
                        <div className="column3">
                            {columnthree.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart}/>
                            )}
                        </div>
                        <div className="column2">
                            {columntwo.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart}/>
                            )}
                        </div>
                        <div className="column4">
                            {columnfour.map(product => 
                                <SingleProduct key={product.id} product={product}  checkProExist={checkProExist} addToCart={addToCart}  userCart={userCart}/>
                            )}
                        </div>
                    </>   
                }     
            </div>
        </>
    )
}


export default Category;
