import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    console.log(email, password);

    const response = await fetch("http://localhost:8000/users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if (json.success === false) {
      alert("wrong cred");
    }
    localStorage.setItem("token", json.token);
    console.log(localStorage);
    navigate("/");
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    e.preventDefault();
  };
  return (
    <div className="container">
      <form>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control my-1"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control my-1"
            id="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
