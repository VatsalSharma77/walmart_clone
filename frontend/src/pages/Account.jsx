import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { mycontext } from "../AuthContext/AuthContext";
import Login from "./LogIn"

const Account = () => {

    const { context, logout } = useContext(mycontext);

    const navigate = useNavigate();
    function handleLogout() {
        logout(); navigate("/");
    }
    if (context.isAuth) {
        return (
            <div style={{ margin: "auto", width: "50%", marginTop: "50px", backgroundColor: "white", color: "black" }}>
                <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Welcome User </h1>
                <button style={{
                    cursor: "pointer",
                    marginTop: "20px",
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "50px",
                    background: "rgb(0,113,220)"
                }}
                    type="button"
                    onClick={handleLogout}
                >Logout</button>
            </div>
        )
    }

    return (
        <Login />
    )
};

export default Account;
