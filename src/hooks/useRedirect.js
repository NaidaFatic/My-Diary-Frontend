import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export const useRedirect = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            navigate("/home");
        } else {
            navigate("/login");
        }
    }, []);

}