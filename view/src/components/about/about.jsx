import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/context";

const About = () => {
    return (
        <>
            <div>About Page</div>
            <Link to='/' className="btn">
                Home
            </Link>
        </>
    )
}

export default About;