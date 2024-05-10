import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mycontext } from "../AuthContext/AuthContext";
const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handleSubmit =  async(e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          password
        }),
      })
      let data = await res.json();
      console.log(data);
      navigate("/login")

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ margin: "auto", width: "30%", marginTop: "50px" }}>
        <h1>Create an Account</h1>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "400",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Personal Information
        </p>
        <form action="" onSubmit={handleSubmit}>
          <label
            style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
            htmlFor=""
          >
            Name <br />
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
              
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              id="name"
              placeholder="Enter Name"
            />
          </label>
          <br />
          <label
            style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
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
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)}
              id="email"
              placeholder="Enter Email"
            />
          </label>
          <label
            style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
            htmlFor=""
          >
            Phone <br />
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
              onChange={(e) =>
                setPhone(e.target.value)}
              id="phone"
              placeholder="Enter Phone Number"
            />
          </label>
          <label
            style={{ fontSize: "20px", fontWeight: "400", color: "grey" }}
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
              type="password"
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
            Create
          </button>
        </form>
        <Link to={"/"}>
          <p>or Return to store</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
