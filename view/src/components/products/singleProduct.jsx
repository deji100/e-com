import { Link } from "react-router-dom";
import { TbDots } from 'react-icons/tb'
import { v4 as uuidv4 } from 'uuid'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import useSavedProducts from "../../hooks/saved";

const SingleProduct = ({product, checkProExist, addToCart, userCart, user, addToSaved, removeSaved}) => {

    const savedProducts = useSavedProducts().filter(item => item.user === user.user_id)

    let uid = uuidv4()

    return (
        <>
            {product.photo_len === "Small"?
                <div className='prod'>
                    <img src={product.photo} alt="product" />
                    <div className='details'>
                    {product.sample === false?
                        <>      
                            {
                            savedProducts.length >= 1 ?
                                savedProducts.map(item => item.product === product.id?
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => removeSaved(item.id)} className="saveBtn saved" />
                                :
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => addToSaved(product.id)} className="saveBtn" />)
                            :
                            <FavoriteBorderOutlinedIcon onClick={() => addToSaved(product.id)} className="saveBtn" />
                            }
                            <button className="addToCart" onClick={() => checkProExist(product.id, userCart)? alert(`${product.title} exists in cart.`): addToCart(product.id, uid)}>Add to cart</button>
                            <Link className="detailsLink" to={`/products/${product.slug}`}>
                                <TbDots />
                            </Link>
                        </>:null
                    }
                    </div>
                </div>
                :
                product.photo_len === "Medium"?
                <div className='prod medium'>
                    <img src={product.photo} alt="product" />
                    <div className='details'>
                    {product.sample === false?
                        <>
                            {savedProducts.length >= 1 ? 
                                savedProducts.map(item => item.product === product.id?
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => removeSaved(item.id)} className="saveBtn saved" />:
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => addToSaved(product.id)} className="saveBtn" />):
                            <FavoriteBorderOutlinedIcon onClick={() => addToSaved(product.id)} className="saveBtn" />
                            }
                            <button className="addToCart" onClick={() => checkProExist(product.id, userCart)? alert(`${product.title} exists in cart.`): addToCart(product.id, uid)}>Add to cart</button>
                            <Link className="detailsLink" to={`/products/${product.slug}`}>
                                <TbDots />
                            </Link>
                        </>:null
                    }
                    </div>
                </div>
                :
                product.photo_len === "Large"?
                <div className='prod large'>
                    <img src={product.photo} alt="product" />
                    <div className='details'>
                    {product.sample === false?
                        <>
                            {savedProducts.length >= 1 ? 
                                savedProducts.map(item => item.product === product.id?
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => removeSaved(item.id)} className="saveBtn saved" />:
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => addToSaved(product.id)} className="saveBtn" />):
                            <FavoriteBorderOutlinedIcon onClick={() => addToSaved(product.id)} className="saveBtn" />
                            }
                            <button className="addToCart" onClick={() => checkProExist(product.id, userCart)? alert(`${product.title} exists in cart.`): addToCart(product.id, uid)}>Add to cart</button>
                            <Link className="detailsLink" to={`/products/${product.slug}`}>
                                <TbDots />
                            </Link>
                        </>:null
                    }
                    </div>
                </div>
                :
                <div className='prod midwide'>
                    <img src={product.photo} alt="product" />
                    <div className='details'>
                    {product.sample === false?
                        <>
                            {savedProducts.length >= 1 ? 
                                savedProducts.map(item => item.product === product.id?
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => removeSaved(item.id)} className="saveBtn saved" />:
                                <FavoriteBorderOutlinedIcon key={item.id} onClick={() => addToSaved(product.id)} className="saveBtn" />):
                            <FavoriteBorderOutlinedIcon onClick={() => addToSaved(product.id)} className="saveBtn" />
                            }
                            <button className="addToCart" onClick={() => checkProExist(product.id, userCart)? alert(`${product.title} exists in cart.`): addToCart(product.id, uid)}>Add to cart</button>
                            <Link className="detailsLink" to={`/products/${product.slug}`}>
                                <TbDots />
                            </Link>
                        </>:null
                    }
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct;