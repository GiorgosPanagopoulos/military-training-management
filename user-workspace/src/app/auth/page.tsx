"use client";

import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(isLogin ? "Login successful" : "Registration successful");
        if (isLogin && data.token) {
          localStorage.setItem("token", data.token);
        }
      } else {
        setMessage(data.message || "Error occurred");
      }
    } catch (error) {
      setMessage("Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={toggleMode} className="text-blue-600 underline">
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}
