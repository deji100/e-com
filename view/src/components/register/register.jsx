import { useState, useContext } from 'react'
import { AuthContext } from '../../context/context';

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const [registerDetails, setRegisterDetails] = useState({username: '', password: '', password2: ''})


    const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterDetails({...registerDetails, [name]:value})
    }    


    const handleSubmit = e => {
        e.preventDefault()
        const {username, password, password2} = registerDetails
        registerUser(username, password, password2)
    }

    return (
        <>
            <center>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                           name="username" 
                           value={registerDetails.username} 
                           id="username" 
                           onChange={handleFormChange} 
                           placeholder="Enter username" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           name="password" 
                           value={registerDetails.password}
                           id="password" 
                           onChange={handleFormChange} 
                           placeholder="Enter password" />
                    <br />
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" 
                           name="password2" 
                           value={registerDetails.password2}
                           id="password2" 
                           onChange={handleFormChange} 
                           placeholder="Confirm password" />
                    <br />
                    <button>register</button>
                </form>
            </center>
        </>
    )
}

export default Register;