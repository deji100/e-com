// import { Link } from "react-router-dom";
import{ useContext } from "react";
import './home.css'
import { AuthContext } from "../../context/context";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DeleteForever } from "@mui/icons-material";

const Home = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
            <div>Hello {user?.username}</div>
            <Button variant="contained">Click Me!</Button>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained" color="success" disableElevation>Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        
            <Button variant="outlined" startIcon={<DeleteForever />}>
            Delete
            </Button>

            <Stack spacing={2} direction="row">
                <Button variant="text" size="small">Text</Button>
                <Button variant="contained" size="medium" color="success" disableElevation>Contained</Button>
                <Button variant="outlined" size="large">Outlined</Button>
            </Stack>

        </div>
    )
}


export default Home;