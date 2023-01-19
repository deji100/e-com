import { useState, useContext } from 'react'
import { AuthContext } from '../../context/context';
// import jwt_decode from "jwt-decode";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [loginDetails, setLoginDetails] = useState({username: '', password: ''})


    const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginDetails({...loginDetails, [name]:value})
    }    


    const handleSubmit = e => {
        e.preventDefault()
        const {username, password} = loginDetails
        loginUser(username, password)
    }

    return (
        <>
            <center>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                           name="username" 
                           value={loginDetails.username} 
                           id="username" 
                           onChange={handleFormChange} 
                           placeholder="Enter username" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           name="password" 
                           value={loginDetails.password}
                           id="password" 
                           onChange={handleFormChange} 
                           placeholder="Enter password" />
                    <br />
                    <button>Login</button>
                </form>
            </center>
        </>
    )
}

export default Login;