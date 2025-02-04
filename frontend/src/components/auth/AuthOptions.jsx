import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {DataContext} from "../../context/DataContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(DataContext);
    // const history = useHistory();
    const navigate = useNavigate();

    const register = () => navigate("/register");
    const login = () => navigate("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
        localStorage.setItem("user",null);
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;