"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginUser} from "../../store/auth-slice"
const initialState = {
  email: "",
  password: "",
};

const Form = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 function onSubmit(event) {
     event.preventDefault();
     dispatch(loginUser(formData)).then((data) => {
       if (data?.payload?.success) {
         alert(data?.payload?.message);
       } else {
         alert(`Error: ${data?.payload?.message}`);
       }
     });
   }

  const router = useRouter();

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Loginimg/Rectangle 1 (1).png')" }}
    >
      <div className="bg-white/30 backdrop-blur-xl shadow-lg rounded-3xl p-8 w-96 border border-white/30">
        <h2 className="text-2xl font-bold text-center text-[#0C8699] mb-4">
          Sign in
        </h2>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 rounded-full bg-white/10 text-teal-900 placeholder-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-2xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 rounded-full bg-white/10 text-teal-900 placeholder-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-2xl"
          />

          <div className="text-sm text-[#0C8699] font-semibold hover:underline cursor-pointer text-left mb-3">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition shadow-md"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-[#0C8699] font-semibold mt-4">
          Don’t have an Account?{" "}
          <span
            className="text-[#0C8699] font-bold hover:underline cursor-pointer"
            onClick={() => router.push('/Signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
