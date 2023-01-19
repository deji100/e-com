import { NavLink } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/context";
import { useCarts } from "../../hooks/carts";
import { FaReact, FaStoreAlt } from "react-icons/fa";
import { CgMenuGridO, CgSearch } from "react-icons/cg";
import { AiOutlineUser } from 'react-icons/ai'
import { BiChat, BiPurchaseTag, BiCartAlt, BiLogOut } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { HiOutlineCog } from 'react-icons/hi'
import useProfile from "../../hooks/profiles";


const Sidebar = () => {
    const { user, logoutUser, totalCartQuantity, search, handleSearch } = useContext(AuthContext)

    const sideBarRef = useRef()
    const barRef = useRef()
    const inputRef = useRef()

    const carts = useCarts()
    const userCart = user?carts?.filter(cart => cart.user === user?.user_id):null;

    const user_profile = useProfile().filter(item => item.user === user?.user_id)

    const handleClicks = () => {
        sideBarRef.current.classList.toggle("active")
        barRef.current.classList.toggle("active")
        inputRef.current.focus()
    }   
    
    return (
        <>
            {user? 
                <div className="bar" ref={barRef}>z
                    <div className="sidebar" ref={sideBarRef}>
                        <div className="logo_content">
                            <div className="logo">
                                <FaReact className="icon"/>
                                <div className="logo_name">Lagos_Today</div>
                            </div>
                            <CgMenuGridO id="btn" onClick={handleClicks}/>
                        </div>
                        <ul className="nav_list">
                            <li>
                                <CgSearch className='icon' id="search" onClick={handleClicks} />
                                <input type="text" value={search} onChange={(e) => handleSearch(e)} placeholder="Search..." ref={inputRef}/>
                                <span className="tooltip">Search</span>
                            </li>
                            <li>
                                <NavLink className="a" to='profile/'>
                                    <AiOutlineUser className='icon' />
                                    <span className="links_name">Profile</span>
                                </NavLink>
                                <span className="tooltip">Profile</span>
                            </li>
                            <li>
                                <NavLink className="a" to='products/'>
                                    <FaStoreAlt className='icon' />
                                    <span className="links_name">Store</span>
                                </NavLink>
                                <span className="tooltip">Store</span>
                            </li>
                            <li>
                                <NavLink className="a" to='order/'>
                                    <BiPurchaseTag className='icon' />
                                    <span className="links_name">Orders</span>
                                </NavLink>
                                <span className="tooltip">Orders</span>
                            </li>
                            <li>
                                <NavLink className="a" to='saved-products/'>
                                    <MdOutlineFavoriteBorder className='icon' />
                                    <span className="links_name">Wishlist</span>
                                </NavLink>
                                <span className="tooltip">Wishlist</span>
                            </li>
                            <li>
                                <NavLink className="a" to='cart/'>
                                    <BiCartAlt className='icon cart' />
                                    <span className="quantity">{totalCartQuantity(userCart)}</span>
                                    <span className="links_name">Cart</span>
                                </NavLink>
                                <span className="tooltip">Cart</span>
                            </li>
                            <li>
                                <NavLink className="a" to='contact/'>
                                    <BiChat className='icon' />
                                    <span className="links_name">Contact Us</span>
                                </NavLink>
                                <span className="tooltip">Contact Us</span>
                            </li>
                            <li>
                                <NavLink className="a" to='setting/'>
                                    <HiOutlineCog className='icon' />
                                    <span className="links_name">Settings</span>
                                </NavLink>
                                <span className="tooltip">Settings</span>
                            </li>
                        </ul>
                        <div className="profile_content">
                            <div className="profile">
                                <div className="profile_details">
                                    {user_profile.map(item => (
                                        <img src={item.image} alt="" key={item.id} />
                                    ))
                                    }
                                    <div className="name_job">
                                        <div className="name">{user.username.toUpperCase()}</div>
                                        <div className="job">Software Developer</div>
                                    </div>
                                </div>
                                < BiLogOut id="log_out" title="Logout" onClick={logoutUser}/>
                            </div>
                        </div>
                    </div>  
                </div>
            :   
                <div>
                    <NavLink className="link" to="/login">Login</NavLink>
                    <NavLink className="link" to="/register">Register</NavLink>
                </div>
            }
        </>
    )
}

export default Sidebar;