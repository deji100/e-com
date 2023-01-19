// import axios from "axios";
import { useState, useEffect } from "react";

const useProfile = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = 'http://127.0.0.1:8000/user/profiles/'
        fetch(url, {signal})
        .then(res => res.json())
        .then(data => setProfiles(data))
        .catch(err => {
            if (err.name === 'AbortError') {
                // ***
            }else {
                // ***
            }
        })

        return () => {
            controller.abort()
        }

    }, [])
    return profiles
}

export default useProfile;