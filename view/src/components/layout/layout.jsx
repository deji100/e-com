import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
// import Navbar from "./navbar"
import NavFooter from "./navfooter"
import './layout.css'

const Layout = () => {
    return (
        <>
            <div>
                <Sidebar />
                <div className="content">
                    {/* <Navbar /> */}
                    <Outlet />
                </div>
                <NavFooter />
            </div>
        </>
    )
}

export default Layout;