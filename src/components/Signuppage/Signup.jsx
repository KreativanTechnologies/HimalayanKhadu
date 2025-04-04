"use client";

import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "",Email:"", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Signup/Rectangle 1 (1).png')" }}
    >
      {/* Container */}
      <div className="bg-white/30 backdrop-blur-xl shadow-lg rounded-3xl p-8 w-96 border border-white/30">
        <h2 className="text-2xl font-bold text-center text-[#0C8699]  mb-4">
          Sign up
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 rounded-full bg-white/10 text-teal-900 placeholder-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-lg"
          />
          <input
            type="Email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 rounded-full bg-white/10 text-teal-900 placeholder-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-lg"
          />
          
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 rounded-full bg-white/10 text-teal-900 placeholder-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-lg"
          />

         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-[#0C8699] font-semibold  mt-4">
          Aready have account ? Sign in{" "}
          <span className="text-[#0C8699]  font-bold hover:underline cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;