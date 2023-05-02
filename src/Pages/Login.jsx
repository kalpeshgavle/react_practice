import React, { useContext } from "react";
import { WrapperContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
    const { setIsLogin } = useContext(WrapperContext);
    const navigate = useNavigate();

    function log() {
        setIsLogin(true);
        navigate("/")
    }
    return <div className="container">
        <h1>Login form..</h1>
        <button className="btn btn-primary" onClick={log}>Login</button>
    </div>
}
export default Login;