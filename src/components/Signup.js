import React, { useState } from "react";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials.name, credentials.email, credentials.password);
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  return (
    <div className="container">
      <form>
        <div className="form-group my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control my-1"
            id="name"
            name="name"
            value={credentials.name}
            placeholder="Enter name"
            onChange={onChange}
          />
        </div>
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

export default Signup;
