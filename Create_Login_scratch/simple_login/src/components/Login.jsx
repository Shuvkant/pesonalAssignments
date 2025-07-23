import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState(null)

  const onsubmit = () => {
    if (email === "strange426344@gmail.com" && password === "123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  if (isLoggedIn) {
    return <Dashboard name={name} />;
  }

  return (
    <div className="flex flex-col p-6 gap-4 max-w-md mx-auto  w-screen">
      <p>Login Dashboard</p>
      <div>
        <label className="font-bold block mb-1">Enter Email:</label>
        <input
          required
          type="email"
          placeholder="xyz@gmail.com"
          className="border border-teal-300 w-full rounded px-2 py-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="font-bold block mb-1">Enter Password:</label>
        <input
          required
          type="password"
          placeholder="password"
          className="border border-teal-300 w-full rounded px-2 py-1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label className="font-bold block mb-1">Enter firstName</label>
        <input
          type="text"
          placeholder="Walter"
          className="border border-teal-300 w-full rounded px-2 py-1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        onClick={onsubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
