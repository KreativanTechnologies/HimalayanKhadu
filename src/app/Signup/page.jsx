"use client"
import React, { useState } from "react";
import Signup from "../../components/Signuppage/Signup";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { registerUser } from "../../store/auth-slice";
const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Page = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await dispatch(registerUser(formData));
    if (response?.payload?.success) {
      alert(response.payload.message);
      router.push("/Login");
    } else {
      console.log(formData,"asd")
      alert("Error: " + response?.payload?.message);
    }
  };

  return (
    <div>
      <Signup
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Page;