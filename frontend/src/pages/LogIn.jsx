import React, { useContext, useState } from 'react'
import { Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { mycontext } from '../AuthContext/AuthContext';
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let { login } = useContext(mycontext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
      })
      let data = await res.json();
      console.log(data);
      login(data.token)
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box style={{ margin: "auto", width: "30%", marginTop: "50px", backgroundColor: "white", color: "black" }}>
      <h1>Already Registered?</h1>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "400",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Login
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label
          style={{ fontSize: "20px", fontWeight: "400" }}
          htmlFor=""
        >
          Email <br />
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius: "50px",
              border: "1px solid grey",
            }}
            type="text"
            name="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            id="email"
            placeholder="Enter E-mail"
          />
        </label>
        <br />
        <label
          style={{ fontSize: "20px", fontWeight: "400" }}
          htmlFor=""
        >
          Password <br />
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius: "50px",
              border: "1px solid grey",
            }}
            type="text"
            name="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)}

            id="password"
            placeholder="Enter Password"
          />
        </label>
        <button
          type="submit"
          style={{
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
        >
          Login
        </button>
      </form>
      <p>Lost your password?</p>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "400",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        New Customer
      </p>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>
      <Link to={"/register"}>
        <button
          style={{
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
        >
          Create an Account
        </button>
      </Link>
    </Box>
  )
}

export default Login