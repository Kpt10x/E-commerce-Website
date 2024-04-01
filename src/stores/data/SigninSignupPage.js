// SigninSignupPage.js

import React, { useState } from "react";
import axios from "axios";

const SigninSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await axios.post("/api/signup", { email, password });
        // Redirect or show success message after successful sign-up
      } else {
        await axios.post("/api/signin", { email, password });
        // Redirect or show success message after successful sign-in
      }
    } catch (error) {
      // Handle error: display error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default SigninSignupPage;
